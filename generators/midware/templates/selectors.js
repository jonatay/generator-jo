import { createSelector } from 'reselect';

export const get<%= entityName %>sRoot = state => {
  return state.<%= subsys %>.<%= entityNameCamel %>s;
};

export const get<%= entityName %>List = state => {
  return get<%= entityName %>sRoot(state).list;
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
