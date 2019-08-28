import { createSelector } from 'reselect';

export const get<%= entityName %>sRoot = state => {
  return state.<%= subsysNameCamel %>.<%= entityNameCamel %>s;
};

export const get<%= entityName %>List = state => {
  return get<%= entityName %>sRoot(state).list;
};

export const get<%= entityName %>Filter = state => {
  return get<%= entityName %>sRoot(state).filter;
};

//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const get<%= entityName %>ById = createSelector(
  get<%= entityName %>List,
  (list, id) => list.filter(rec => rec.id === id)
);

export const get<%= entityName %>s = createSelector(
  get<%= entityName %>List,
  list => list.toArray()
);


export const getFiltered<%= entityName %>s = createSelector(
  get<%= entityName %>s,
  get<%= entityName %>Filter,
  (<%= entityNameCamel %>s, filter) => <%= entityNameCamel %>s //add .filter here
);
