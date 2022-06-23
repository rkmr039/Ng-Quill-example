'use strict';

// Declare app level module which depends on views, and core components
var myAppModule = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'ngQuill',
  'myApp.version'
]);
myAppModule.config(['$locationProvider', 
'$routeProvider', 'ngQuillConfigProvider', function($locationProvider, $routeProvider, ngQuillConfigProvider) {
  $locationProvider.hashPrefix('!');
  ngQuillConfigProvider.set();
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

  //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
myAppModule.controller('AppCtrl', [
  '$scope',
  '$timeout',
  function($scope, $timeout) {
      $scope.title = 'jgfcfjgfjg';
      $scope.changeDetected = false;

      $scope.editorCreated = function (editor) {
          console.log(editor);
      };
      $scope.contentChanged = function (editor, html, text) {
          $scope.changeDetected = true;
          console.log('editor: ', editor, 'html: ', html, 'text:', text);
      };
  }
]);