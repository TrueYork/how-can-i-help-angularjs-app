'use strict';

angular.module('chatApp')
    .component('chat', {
        bindings: {
            initialMessage: '@',
            onUserMessage: '&',
            callbacks: '<?'
        },
        templateUrl: 'components/chat/chat.template.html',
        controller: function ChatController($scope) {
            const MESSAGE_TYPES = {
                SENT: 'sent',
                RECIEVED: 'recieved'
            };

            $scope.title = 'Bill Gates';
            $scope.description = 'Sales Support Department';
            $scope.messageBoxPlaceholder = 'Type a message and click Enter...';
            $scope.messages = [];

            this.$onInit = () => {
                $scope.handleUserMessage(this.initialMessage);

                this.callbacks.onResponseMessage = message => {
                    $scope.displayMessage({
                        type: MESSAGE_TYPES.RECIEVED,
                        msg: message
                    });
                };
            };

            $scope.handleUserMessage = message => {
                $scope.displayMessage({
                    type: MESSAGE_TYPES.SENT,
                    msg: message
                });
                
                this.onUserMessage({msg: message});
            };

            $scope.displayMessage = function(messageData) {
                $scope.messages.push(messageData);
            };
        }
    });