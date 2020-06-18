'use strict';

angular.module('chatApp')
    .directive('messageBox', function MessageBoxDirective() {
        return {
            scope: {
                placeholder: '@',
                onUserMessage: '&',
                getMessage: '=',
            },
            restrict: 'E',
            templateUrl: 'components/messageBox/messageBox.template.html',
            controller: ['$scope', function MessageBoxController($scope) {
                const ENTER_KEY_CODE = 13;

                $scope.onKeyDown = function handleKeyDown($event) {
                    if ($event.keyCode === ENTER_KEY_CODE && !$event.shiftKey) {
                        $event.preventDefault();

                        const msg = $scope.message.trim();

                        if (!msg) return;

                        $scope.message = '';

                        $scope.onUserMessage({msg});
                    }
                };

                $scope.getMessage = function () {
                    return $scope.message;
                };
            }]
        }
    });