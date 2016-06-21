var guppylistApp = angular.module('guppylist', [])

  //.config(function($routeProvider) {
  //  $routeProvider
  //    .when('/reviews/:id', {
  //      controller: 'ReviewController',
  //      templateUrl: '../templates/review.html'
  //    })
  //    .when('/search', {
  //      controller:'SearchController',
  //      templateUrl:'../templates/search.html'
  //    })
  //    .otherwise({
  //      redirectTo:'/'
  //    });
  //})

  .filter('jokify', function() {
    return function(str) {
      return str + ', ha ha';
    }
  })
;