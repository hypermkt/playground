App.Container = Backbone.View.extend({
  show: function(view) {
    this.destroyView(this.currentView);
    this.$el.append(view.render().$el);
    this.currentView = view;
  },
  destroyView: function(view) {
    if (!view) {
      return;
    }
    view.off();
    view.remove();
  },
  empty: function() {
    this.destroyView(this.currentView);
    this.currentView = null;
  }
});
