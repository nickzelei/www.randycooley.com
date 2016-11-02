angular.module('TestimonialFactory', []).factory('TestimonialService', ['$http', function($http) {

  return {
    get : function(callback) {
        callback = callback || false;
        if (!callback)
            return false;
        
        return callback(
            [
                { description: "Randy Cooley is the most able and trustworthy contractor we have ever had. Thirty-five years ago we moved into a house in Ann Arbor with distinguished architecture but needing much done to it. In project after project Randy has restored, remodeled, maintained, and enhanced it over many years.  He chooses the employees on his team with care.  He himself is a fine carpenter, able mason, and excellent painter, and his good taste shows in his advice. He has always been there for us in emergencies. He is a person of integrity and good judgment.  He will tell you what he thinks doesn’t need to be done or done now, and is imaginative in solving difficult problems.  We give him the highest possible recommendation and will be happy to talk with anyone about our work with him.",
                author: "Joseph and Alice Vining" }
            ]
        );

        

    //   id = id || false;
    //   if (!id)
    //     $http.get('/api/projects').then(function(res) {
    //       return callback(res.data);
    //     } );
    //   else
    //     $http.get('/api/projects/' + id).then(function(res) {
    //       return callback(res.data);
    //     });
    }
  }
}]);
