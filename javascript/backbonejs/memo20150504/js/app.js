window.App = {};

$(function (){
  var note = new App.Note({
    title: "タイトル",
    body: "本文",
  });

  var noteView = new App.NoteListItemView({
    model: note
  });

  noteView.render().$el.appendTo($(document.body));
});
