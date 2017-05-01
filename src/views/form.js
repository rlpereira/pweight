window.app = window.app || {};

window.app.FormView = {
  init: function() {
    return this.render();
  },

  bindEvents: function() {
    var self = this;
    this.input = document.querySelector('#weight-input');
    this.btn = document.querySelector('#submit-btn');

    this.btn.addEventListener('click', function(ev) {
      ev.preventDefault();
      var value = self.input.value;

      if(self.validate(value)) {
        pWeight.addWeight(value);
        self.clearForm();
      }
    });
  },

  validate: function(value) {
    if(!value || value === undefined || value === null) {
      return false;
    }

    return true;
  },

  clearForm: function() {
    this.input.value = '';
  },

  render: function() {
    return '<form><input id="weight-input" type="number" /><button id="submit-btn" type="submit">Send</button></form>';
  }
};
