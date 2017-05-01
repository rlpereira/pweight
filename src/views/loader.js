window.app = window.app || {};

window.app.LoaderView = {
  init: function() {
    return this.render();
  },

  hide: function() {
    var self = this;
    this.loader = document.querySelector('#app-loader');
    this.loader.classList.add('hide');

    setTimeout(function() {
      self.loader.style.display = 'none';
    }, 999);
  },

  render: function() {
    return '' +
      '<div class="loader">' +
        '<i class="pweight-icon-arrows-cw animate-spin"></i>' +
      '</div>';
  }
};
