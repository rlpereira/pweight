(function (window) {
	'use strict';

  function LoaderView() {
    var self = this;
    this.container = document.querySelector('#app-loader');
    this.render();
    setTimeout(self.hide.bind(this), 1500);
  }

  LoaderView.prototype.hide = function () {
    var self = this;
    this.loader = document.querySelector('#app-loader');
    this.loader.classList.add('hide');

    setTimeout(function() {
      self.loader.style.display = 'none';
    }, 999);
  }

  LoaderView.prototype.render = function () {
    this.container.innerHTML = '' +
      '<div class="loader">' +
        '<i class="pweight-icon-arrows-cw animate-spin"></i>' +
      '</div>';
  }

  // Export to window
	window = window || {};
	window.LoaderView = LoaderView;
})(window);
