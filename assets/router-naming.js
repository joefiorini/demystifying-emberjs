App.Router.map(function() {

  this.resource("people", function() {

    this.route("show");
    this.route("new");

  });

});
