import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { <%= entityNameCamel %>Actions } from './<%= entity %>-actions'
import { <%= entityNameCamel %>List } from './<%= entity %>-list';
import { authActions } from 'src/mid/common/auth';

function* loadAll<%= entityName %>s() {
  const <%= entityNameCamel %>s = yield call([
    <%= entityNameCamel %>List,
    <%= entityNameCamel %>List.list
  ]);
  yield put(
    <%= entityNameCamel %>Actions.load<%= entityName %>sFulfilled(<%= entityNameCamel %>s)
  );
}
function* create<%= entityName %>({ payload: { <%= entityNameCamel %> } }) {
  let result = yield call([<%= entityNameCamel %>List, <%= entityNameCamel %>List.insert], {
    <%= entityNameCamel %>
  });
  yield put(
    <%= entityNameCamel %>Actions.create<%= entityName %>Fulfilled(
      result.<%= entityNameCamel %>
    )
  );
}

function* update<%= entityName %>({ payload: { id, changes } }) {
  let result = yield call(
    [<%= entityNameCamel %>List, <%= entityNameCamel %>List.update],
    id,
    { changes }
  );
  yield put(
    <%= entityNameCamel %>Actions.update<%= entityName %>Fulfilled(
      result.<%= entityNameCamel %>
    )
  );
}

function* remove<%= entityName %>({ payload: { <%= entityNameCamel %> } }) {
  let result = yield call(
    [<%= entityNameCamel %>List, <%= entityNameCamel %>List.remove],
    <%= entityNameCamel %>.id
  );
  if (result.status === 'deleted') {
    yield put(
      <%= entityNameCamel %>Actions.remove<%= entityName %>Fulfilled(<%= entityNameCamel %>)
    );
  } else {
    yield put(<%= entityNameCamel %>Actions.remove<%= entityName %>Failed(result));
  }
}
//=====================================
//  WATCHERS
//-------------------------------------

function* watchAuthentication() {
  while (true) {
    let { payload } = yield take(authActions.SIGN_IN_FULFILLED);
    <%= entityNameCamel %>List.token = payload.idToken;
    yield take([authActions.SIGN_OUT_FULFILLED]);
    <%= entityNameCamel %>List.token = payload.null;
  }
}

function* watchIdTokenRefresh() {
  while (true) {
    const { payload } = yield take(authActions.REFRESH_ID_TOKEN_FULFILLED);
    <%= entityNameCamel %>List.token = payload.idToken;
  }
}

function* watchLoad<%= entityName %>s() {
  yield takeEvery(
    <%= entityNameCamel %>Actions.LOAD_<%= entityNameAction %>S,
    loadAll<%= entityName %>s
  );
}

function* watchCreate<%= entityName %>() {
  yield takeEvery(
    <%= entityNameCamel %>Actions.CREATE_<%= entityNameAction %>,
    create<%= entityName %>
  );
}

function* watchUpdate<%= entityName %>() {
  yield takeEvery(
    <%= entityNameCamel %>Actions.UPDATE_<%= entityNameAction %>,
    update<%= entityName %>
  );
}

function* watchRemove<%= entityName %>() {
  yield takeEvery(
    <%= entityNameCamel %>Actions.REMOVE_<%= entityNameAction %>,
    remove<%= entityName %>
  );
}

export const <%= entityNameCamel %>Sagas = [
  fork(watchAuthentication),
  fork(watchIdTokenRefresh),
  fork(watchLoad<%= entityName %>s),
  fork(watchUpdate<%= entityName %>),
  fork(watchCreate<%= entityName %>),
  fork(watchRemove<%= entityName %>)
];
