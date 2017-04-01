'use strict';

/**
 * @ngdoc function
 * @name npmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the npmApp
 */
angular.module('npmApp')
  .controller('MainCtrl', function ($scope, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.error=false;
	$scope.validate = function(){
		
		if(($scope.username === 'recruiter@jobs.com') && ($scope.password === '123')){
			
			$window.location.href = "views/recruiterLogin.html";
		}
		else if(($scope.username === 'seeker@jobs.com') && ($scope.password === '123')){
			
			$window.location.href = "views/jobseekerLogin.html";
		}	
		else{
			$scope.error=true;
			$scope.statusVal = "Try Again"
		}
		
	}
	
	
  });
