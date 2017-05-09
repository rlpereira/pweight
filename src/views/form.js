(function (window) {
	'use strict';

  function FormView(controller) {
    this.controller = controller;
    this.container = document.querySelector('#form-wrapper');
    this.render();
    this.bind();
  }

  FormView.prototype.bind = function (weight) {
    var self = this;

    this.input = document.querySelector('#weight-input');
    this.btn = document.querySelector('#submit-btn');

    this.btn.addEventListener('click', function(ev) {
      ev.preventDefault();
      var value = self.input.value;

      if(self.validate(value)) {
        self.controller.addWeight(value);
        self.clearForm();
      }
    });
  }

  FormView.prototype.validate = function (value) {
    if(!value || value === undefined || value === null || value === '') {
      return false;
    }

    return true;
  }

  FormView.prototype.clearForm = function (weight) {
    this.input.value = '';
  }

  FormView.prototype.render = function (weight) {
    this.container.innerHTML = '<form><input id="weight-input" type="number" /><button id="submit-btn" type="submit">Send</button></form>';
  }

  // Export to window
	window = window || {};
	window.FormView = FormView;
})(window);
