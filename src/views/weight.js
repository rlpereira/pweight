(function (window) {
	'use strict';

  function ItemView(weight) {
    this.weight = weight;
  }

  ItemView.prototype.render = function (weight) {
    return '<li>' + this.weight + ' kg</li>';
  }

  // Export to window
	window = window || {};
	window.ItemView = ItemView;
})(window);
