(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: 'test.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
