window.app = window.app || {};

window.app.Collection = {
  init: function(weights) {
    this.weights = weights || [];
  },

  addWeight: function(weight) {
    this.weights.push( new app.Model.init(weight) );
  },

  inspect: function() {
    console.log(this.weights);
  }
};
