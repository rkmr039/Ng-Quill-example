'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngQuill'])

.config(['$routeProvider', 'ngQuillConfigProvider', function($routeProvider,ngQuillConfigProvider) {
  ngQuillConfigProvider.set();

}])

.controller('View1Ctrl', [function() {
  '$scope',
  '$timeout',
  function($scope, $timeout) {
      $scope.changeDetected = false;

      $scope.editorCreated = function (editor) {
          console.log(editor);
          $scope.changeDetectedView1 = "asdfds";
            $scope.title = 'jgfcfjgfjg';
          $scope.editor = editor;
            $scope.editorModules = {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              //['blockquote', 'code-block'],

              [{ 'header': 1 }, { 'header': 2 }],               // custom button values
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              //[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
              [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
              [{ 'direction': 'rtl' }],                         // text direction

              //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

              [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
              //[{ 'font': [] }],
              [{ 'align': [] }],

              //['clean'],                                         // remove formatting button

              ['link', 'image']                         // link and image, video
            ]
          }
      };
      $scope.contentChanged = function (editor, html, text) {
          $scope.changeDetected = true;
          console.log('editor: ', editor, 'html: ', html, 'text:', text);
      };
  }
}]);