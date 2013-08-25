App.Router.map(function() {
  this.resource("people", function() {

    this.route("show");
    this.route("new");

  });
});

App.PeopleShowRoute = Ember.Route.extend({
});

App.PeopleNewRoute = Ember.Route.extend({
});
