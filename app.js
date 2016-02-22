var app=angular.module("myApp",['ngRoute']);

/*Get all data from the json file */
app.controller('myCtrl1',function($scope,$http){
    $http.get('jsonFiles/angular.json').success(function(response){
        $scope.topics=response;
    });
});
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/Angular Intro', {
		   templateUrl: 'tutorials/angularjs/Angular Intro.html'
		}).
		when('/Angular Expression', {
		   templateUrl: 'tutorials/angularjs/Angular Expression.html'
		}).
		when('/Angular Intro', {
		   templateUrl: 'tutorials/angularjs/angular introduction.html'
		}).
		when('/Angular Directives', {
		   templateUrl: 'tutorials/angularjs/Angular Directives.html',
		   controller:"angularDirectivesController"
		}).
		when('/Angular Intro', {
		   templateUrl: 'tutorials/angularjs/angular introduction.html'
		}).
		when('/Angular Intro', {
		   templateUrl: 'tutorials/angularjs/angular introduction.html'
		}).
		when('/Angular Filters', {
		   templateUrl: 'tutorials/angularjs/Angular Filters.html'

		}).
		when('/Angular Services', {
		   templateUrl: 'tutorials/angularjs/Angular Services.html',
		   controller:"angularServicesController"
		});
 }]);

 