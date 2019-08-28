export const <%= entityNameCamel %>Actions = {
  
  SET_FILTER_<%= entityNameAction %>: '<%= subsysNameAction %>SET_FILTER_<%= entityNameAction %>S',

  LOAD_<%= entityNameAction %>S: '<%= subsysNameAction %>_LOAD_<%= entityNameAction %>S',
  LOAD_<%= entityNameAction %>S_FULFILLED: '<%= subsysNameAction %>_LOAD_<%= entityNameAction %>S_FULFILLED',
  LOAD_<%= entityNameAction %>S_FAILED: '<%= subsysNameAction %>_LOAD_<%= entityNameAction %>S_FAILED',

  CREATE_<%= entityNameAction %>: '<%= subsysNameAction %>_CREATE_<%= entityNameAction %>',
  CREATE_<%= entityNameAction %>_FAILED: '<%= subsysNameAction %>_CREATE_<%= entityNameAction %>_FAILED',
  CREATE_<%= entityNameAction %>_FULFILLED:
    '<%= subsysNameAction %>_CREATE_<%= entityNameAction %>_FULFILLED',

  REMOVE_<%= entityNameAction %>: '<%= subsysNameAction %>_REMOVE_<%= entityNameAction %>',
  REMOVE_<%= entityNameAction %>_FAILED: '<%= subsysNameAction %>_REMOVE_<%= entityNameAction %>_FAILED',
  REMOVE_<%= entityNameAction %>_FULFILLED:
    '<%= subsysNameAction %>_REMOVE_<%= entityNameAction %>_FULFILLED',

  UPDATE_<%= entityNameAction %>: '<%= subsysNameAction %>_UPDATE_<%= entityNameAction %>',
  UPDATE_<%= entityNameAction %>_FAILED: '<%= subsysNameAction %>_UPDATE_<%= entityNameAction %>_FAILED',
  UPDATE_<%= entityNameAction %>_FULFILLED:
    '<%= subsysNameAction %>_UPDATE_<%= entityNameAction %>_FULFILLED',

  setFilter<%= entityName %>: filter => ({
    type: <%= entityNameCamel %>Actions.SET_FILTER_<%= entityNameAction %>,
    payload: { filter }
  }),

  load<%= entityName %>s: () => ({
    type: <%= entityNameCamel %>Actions.LOAD_<%= entityNameAction %>S
  }),
  load<%= entityName %>sFulfilled: <%= entityNameCamel %>s => ({
    type: <%= entityNameCamel %>Actions.LOAD_<%= entityNameAction %>S_FULFILLED,
    payload: { <%= entityNameCamel %>s }
  }),

  load<%= entityName %>sFailed: error => ({
    type: <%= entityNameCamel %>Actions.LOAD_<%= entityNameAction %>S_FAILED,
    payload: { error }
  }),

  create<%= entityName %>: <%= entityNameCamel %> => ({
    type: <%= entityNameCamel %>Actions.CREATE_<%= entityNameAction %>,
    payload: { <%= entityNameCamel %> }
  }),

  create<%= entityName %>Failed: error => ({
    type: <%= entityNameCamel %>Actions.CREATE_<%= entityNameAction %>_FAILED,
    payload: { error }
  }),

  create<%= entityName %>Fulfilled: <%= entityNameCamel %> => ({
    type: <%= entityNameCamel %>Actions.CREATE_<%= entityNameAction %>_FULFILLED,
    payload: { <%= entityNameCamel %> }
  }),

  remove<%= entityName %>: <%= entityNameCamel %> => ({
    type: <%= entityNameCamel %>Actions.REMOVE_<%= entityNameAction %>,
    payload: { <%= entityNameCamel %> }
  }),

  remove<%= entityName %>Failed: error => ({
    type: <%= entityNameCamel %>Actions.REMOVE_<%= entityNameAction %>_FAILED,
    payload: { error }
  }),

  remove<%= entityName %>Fulfilled: <%= entityNameCamel %> => ({
    type: <%= entityNameCamel %>Actions.REMOVE_<%= entityNameAction %>_FULFILLED,
    payload: { <%= entityNameCamel %> }
  }),

  update<%= entityName %>: (id, changes) => ({
    type: <%= entityNameCamel %>Actions.UPDATE_<%= entityNameAction %>,
    payload: { id, changes }
  }),

  update<%= entityName %>Failed: error => ({
    type: <%= entityNameCamel %>Actions.UPDATE_<%= entityNameAction %>_FAILED,
    payload: { error }
  }),

  update<%= entityName %>Fulfilled: <%= entityNameCamel %> => ({
    type: <%= entityNameCamel %>Actions.UPDATE_<%= entityNameAction %>_FULFILLED,
    payload: { <%= entityNameCamel %> }
  })
};
