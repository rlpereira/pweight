window.app = window.app || {};

window.app.ListView = {
  init: function(collection) {
    this.collection = collection;
    return this.render();
  },

  render: function() {
    var template =  '<ul>';

    for (var i = 0; i < this.collection.length; i++) {
      var weight = this.collection[i];
      var li = app.ItemView.init(weight);
      template += li;
    }

    template += '</ul>';

    return template;
  }
};
