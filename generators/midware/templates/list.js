import { ApiList } from 'src/mid/api/index';
import { <%= entityNameCamel %>Actions } from './<%= entity %>-actions';
import { <%= entityName %> } from './<%= entity %>';

const <%= entityNameCamel %>Path = '<%= subsys %>/<%= entity %>s';

class <%= entityName %>List extends ApiList {}

export const <%= entityNameCamel %>List = new <%= entityName %>List(
  {
    onAdd: <%= entityNameCamel %>Actions.create<%= entityName %>Fulfilled(),
    onChange: <%= entityNameCamel %>Actions.update<%= entityName %>Fulfilled(),
    onLoad: <%= entityNameCamel %>Actions.load<%= entityName %>sFulfilled(),
    onRemove: <%= entityNameCamel %>Actions.remove<%= entityName %>Fulfilled()
  },
  <%= entityName %>,
  <%= entityNameCamel %>Path
);
