window.app = window.app || {};

window.app.ItemView = {
  init: function(weight) {
    this.weight = weight.value;
    return this.render();
  },

  render: function() {
    return '<li>' + this.weight + ' kg</li>';
  }
};
