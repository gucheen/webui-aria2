angular.module('webui.services.alerts', ['webui.services.deps'])
.factory('$alerts', ['$_', function(_) {
  var alerters = [];
  return {
    addAlert: function(message) {
      var notification = new Notification('Cross Aria2', {
        body: message
      });
    },
    addAlerter: function(cb) {
      alerters.push(cb);
    },
    // a simple function for debugging
    log: function(msg) {
      this.addAlert(msg, 'info');
    }
  };
}]);
