'use strict';

angular.module('chatApp')
    .component('welcome', {
        bindings: {
            onStartChat: '&'
        },
        templateUrl: 'components/welcome/welcome.template.html',
        controller: function WelcomeController($scope) {
            $scope.title = 'Help us understanding your problem...';
            $scope.messageBoxPlaceholder = 'Type a few words about your issue here and click "Start Chat"';

            // Defined within message-box directive
            $scope.getUserMessage = () => {};

            $scope.startChat = function(msg) {
                $scope.$ctrl.onStartChat({msg});
            }

            $scope.onStartChatButtonClick = function startChat() {
                const message = $scope.getUserMessage();

                $scope.startChat(message);
            }
        }
    });