'use strict';

angular.module('chatApp')
    .component('toolbar', {
        templateUrl: 'components/toolbar/toolbar.template.html',
        controller: function ToolbarController($scope) {
            $scope.buttons = [
                {className: 'close', onClick: onClose},
                {className: 'minimize', onClick: () => {}},
                {className: 'expand', onClick: () => {}}
            ];

            function onClose() {
                alert(123);
            }
        }
    });