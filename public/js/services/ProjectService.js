angular.module('ProjectFactory', []).factory('ProjectService', ['$http', function ($http) {
  return {
    get: function (callback, id) {
      callback = callback || false;
      if (!callback)
        return false;

      id = id || false;
      if (!id)
        $http.get('/api/projects').then(function (res) {
          return callback(res.data);
        });
      else
        $http.get('/api/projects/' + id).then(function (res) {
          return callback(res.data);
        });
    }
  }
}]);
