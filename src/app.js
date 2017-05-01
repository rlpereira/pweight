console.log('App Ready!');

window.app = window.app || {};

window.pWeight = {
  init: function() {
    this.listWrapper = document.querySelector('#list-wrapper');
    this.formWrapper = document.querySelector('#form-wrapper');
    this.loaderWrapper = document.querySelector('#app-loader');

    this.loaderWrapper.innerHTML = app.LoaderView.init();

    this.initializeCollection();
    this.renderForm();
    this.bindForm();
    this.renderList();

    setTimeout(function() {
      app.LoaderView.hide();
    }, 3500);
  },

  initializeCollection: function() {
    app.Collection.init();
  },

  renderForm: function() {
    this.formWrapper.innerHTML = app.FormView.init();
  },

  bindForm: function() {
    app.FormView.bindEvents();
  },

  renderList: function() {
    this.listWrapper.innerHTML = app.ListView.init(app.Collection.weights);
  },

  addWeight: function(weight) {
    app.Collection.addWeight(weight);
    this.renderList();
  }
}

window.pWeight.init();
