window.app = window.app || {};

window.app.Collection = {
  init: function() {
    this.weights = this.load();
  },

  addWeight: function(weight) {
    this.weights.unshift( new app.Model.init(weight) );
    this.save();
  },

  load: function() {
    if(!localStorage.weights) {
      return [];
    }

    return JSON.parse(localStorage.weights);
  },

  save: function() {
    var weights = this.weights || [];
    localStorage.weights = JSON.stringify(weights);
  },

  inspect: function() {
    console.log(this.weights);
  }
};
