(function (window) {
	'use strict';

  function Collection(model) {
    this.model = model;
    this.weights = this.load();
  }

  Collection.prototype.addWeight = function (weight) {
    this.weights.unshift( new this.model(weight) );
    this.save();
	};

  Collection.prototype.load = function (weight) {
    if(!localStorage.weights) {
      return [];
    }

    return JSON.parse(localStorage.weights);
	};

  Collection.prototype.save = function () {
    var weights = this.weights || [];
    localStorage.weights = JSON.stringify(weights);
	};

  Collection.prototype.inspect = function () {
    console.log(this.weights);
	};

  // Export to window
	window = window || {};
	window.Collection = Collection;
})(window);
