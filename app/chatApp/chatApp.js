'use strict';

angular.module('chatApp', ['ngRoute'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<chat-app></chat-app>'
        });
    }
]);

angular.module('chatApp')
  .component('chatApp', {
    templateUrl: 'chatApp.template.html',
    controller: function ChatAppController($scope, messagingService) {
      $scope.isChatActive = false;
      $scope.chatCallbacks = {
        onResponseMessage() {}
      };

      $scope.onServerMessage = () => {};

      $scope.onUserMessage = function handleUserMessage(msg) {
        messagingService.sendMessage({msg});
      };

      messagingService.onMessage = function handleServerMessage(msg) {
        $scope.chatCallbacks.onResponseMessage(msg);
      }

      $scope.startChat = function startChat(msg) {
        messagingService.init();
        $scope.onUserMessage(msg);

        $scope.isChatActive = true;
        $scope.initialMessage = msg;
      }

      $scope.closeChatApp = function() {
        messagingService.destroy();
        window.parent.postMessage({ msg: 'close' }, '*');
      }
    }
  });