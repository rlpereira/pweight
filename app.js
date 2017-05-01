console.log('App Ready!');

var Model = {
  init: function(weight) {
    if(!weight) {
      return false;
    }

    this.value = weight;
    return this;
  }
}

var Collection = {
  init: function(weights) {
    this.weights = weights || [];
  },

  addWeight: function(weight) {
    this.weights.push( Model.init(weight) );
  },

  inspect: function() {
    console.log(this.weights);
  }
};

var FormView = {
  init: function() {
    return this.render();
  },

  render: function() {
    return '<form><input type="text" /><button type="submit">Send</button></form>';
  }
};

var ItemView = {
  init: function(weight) {
    this.weight = weight.value;
    return this.render();
  },

  render: function() {
    return '<li>' + this.weight + '</li>';
  }
};

var ListView = {
  init: function(collection) {
    this.collection = collection;
    return this.render();
  },

  render: function() {
    var template =  '<ul>';

    for (var i = 0; i < this.collection.length; i++) {
      var weight = this.collection[i];
      var li = ItemView.init(weight);
      template += li;
    }

    template += '</ul>';

    return template;
  }
};

var App = function() {
  var listWrapper = document.querySelector('#list-wrapper');
  var formWrapper = document.querySelector('#form-wrapper');

  Collection.init();
  Collection.addWeight(111);
  Collection.addWeight(110);
  Collection.addWeight(112);
  Collection.addWeight(110);
  Collection.inspect();

  formWrapper.innerHTML = FormView.init();
  listWrapper.innerHTML = ListView.init(Collection.weights);
}

App();
