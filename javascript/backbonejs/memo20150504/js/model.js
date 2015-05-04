App.Note = Backbone.Model.extend({
  defaults: {
    title: "",
    body: ""
  }
});

App.NoteCollection = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage('Notes'),
  model: App.Note
});
