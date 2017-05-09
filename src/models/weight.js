(function (window) {
	'use strict';

  function Model(weight) {
    this.value = weight;
  }

  // Export to window
	window = window || {};
	window.Model = Model;
})(window);
