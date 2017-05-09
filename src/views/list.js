(function (window) {
	'use strict';

  function ListView(collection) {
    this.container = document.querySelector('#list-wrapper');
    this.collection = collection;
    this.render();
  }

  ListView.prototype.render = function () {
    var template =  '<ul>';

    for (var i = 0; i < this.collection.length; i++) {
      var li = new ItemView(this.collection[i].value);
      template += li.render();
    }

    template += '</ul>';

    this.container.innerHTML = template;
  }

  // Export to window
	window = window || {};
	window.ListView = ListView;
})(window);
