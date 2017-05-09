(function (window) {
  'use strict';

  console.log('App Ready!');

  var PWeight = function() {
    this.collection = new Collection(Model);
    this.setViews();
  }

  PWeight.prototype.setViews = function() {
    this.loader = new LoaderView();
    this.form = new FormView(this);
    this.list = new ListView(this.collection.weights);
  }

  PWeight.prototype.addWeight = function(weight) {
    this.collection.addWeight(weight);
    this.list.render();
  }

  // Export to window
	window = window || {};
	window.PWeight = PWeight;
})(window);


var pweight = new PWeight();
