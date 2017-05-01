window.app = window.app || {};

window.app.Model = {
  init: function(weight) {
    if(!weight) {
      return false;
    }

    this.value = weight;
    return this;
  }
}
