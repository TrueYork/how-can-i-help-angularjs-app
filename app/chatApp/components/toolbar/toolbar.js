'use strict';

angular.module('chatApp')
    .component('toolbar', {
        bindings: {
            close: '&',
        },
        templateUrl: 'components/toolbar/toolbar.template.html',
        controller: function ToolbarController($scope) {
            $scope.buttons = [
                {className: 'close', onClick: onClose},
                {className: 'minimize', onClick: () => {}},
                {className: 'expand', onClick: () => {}}
            ];

            function onClose() {
                $scope.$ctrl.close();
            }
        }
    });