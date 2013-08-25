App.Router.map(function() {

  this.resource("people"/*, snip... */);

});

App.PeopleRoute = Ember.Route.extend({
  model: function() {
    App.Person.findAll();
  }
});
