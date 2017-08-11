import DS from 'ember-data';

export default DS.Model.extend({
  qcontent: DS.attr(),
  author: DS.attr(),
  notes: DS.attr()
});
