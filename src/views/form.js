window.app = window.app || {};

window.app.FormView = {
  init: function() {
    return this.render();
  },

  bindEvents: function() {
    var btn = document.querySelector('#submit-btn');
    var self = this;

    btn.addEventListener('click', function(ev) {
      ev.preventDefault();
      var input = document.querySelector('#weight-input');
      var value = input.value;
      pWeight.addWeight(value);
      self.clearForm();
    });
  },

  clearForm: function() {
    var input = document.querySelector('#weight-input');
    input.value = '';
  },

  render: function() {
    return '<form><input id="weight-input" type="text" /><button id="submit-btn" type="submit">Send</button></form>';
  }
};
