import { List, Record } from 'immutable';
import { <%= entityNameCamel %>Actions } from './<%= entity %>-actions';

export const <%= entityName %>State = new Record({
  filter: {},
  list: new List()
});

export function <%= entityNameCamel %>Reducer(
  state = new <%= entityName %>State(),
  { payload, type }
) {
  switch (type) {

    case <%= entityNameCamel %>Actions.SET_FILTER_<%= entityNameAction %>:
      return state.set("filter", { ...state.filter, ...payload.filter });

    case <%= entityNameCamel %>Actions.CREATE_<%= entityNameAction %>_FULFILLED:
      return state.set(
        'list',
        state.list.unshift(payload.<%= entityNameCamel %>)
      );

    case <%= entityNameCamel %>Actions.UPDATE_<%= entityNameAction %>_FULFILLED:
      return state.set(
        'list',
        state.list.map(r => {
          return r.id === payload.<%= entityNameCamel %>.id
            ? payload.<%= entityNameCamel %>
            : r;
        })
      );

    case <%= entityNameCamel %>Actions.REMOVE_<%= entityNameAction %>_FULFILLED:
      return state.set(
        'list',
        state.list.filter(<%= entityNameCamel %> => {
          return <%= entityNameCamel %>.id !== payload.<%= entityNameCamel %>.id;
        })
      );

    case <%= entityNameCamel %>Actions.LOAD_<%= entityNameAction %>S_FULFILLED:
      return state.set(
        'list',
        new List(payload.<%= entityNameCamel %>s)
      );

    default:
      return state;
  }
}
