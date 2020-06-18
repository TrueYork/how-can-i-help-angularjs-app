'use strict';

angular.module('supportApp', []);

angular.module('supportApp')
    .directive('supportApp', function SupportAppDirective() {
        return {
            restrict: 'E',
            templateUrl: 'modules/support-app/support-app.template.html',
            controller: ['$scope', function SupportAppController($scope) {
                $scope.isChatOpen = false;

                $scope.onChatButtonClick = function handleChatButtonClick() {
                    $scope.isChatOpen = true;
                }
            }],
            link: function link($scope) {
                $scope.chatIFrameStyles = {
                    position: 'fixed',
                    right: '0',
                    bottom: '0',
                    width: '350px',
                    height: '490px',
                    border: 'none',
                };

                $scope.chatIconStyles = {
                    position: 'fixed',
                    right: '15px',
                    bottom: '15px',
                    width: '100px',
                    height: '100px',
                    lineHeight: '100px',
                    textAlign: 'center',
                    backgroundColor: '#CB6EF2',
                    border: 'none',
                    borderRadius: '50%',
                    color: 'white',
                    boxShadow: '0 0 15px #FF00CC',
                    fontSize: '3em',
                    cursor: 'pointer',
                    userSelect: 'none'
                };

                const style = document.createElement('style');
                style.innerHTML = '#chat-icon:hover {' +
                    'opacity: 0.7;' +
                    'height: 150px;' +
                    '}' +
                    '#chat-icon:active {' +
                    'border: none;' +
                    'opacity: 0.5;' +
                    '}' +
                    '#chat-icon:focus {' +
                    'outline: none;' +
                    '}';
                document.head.appendChild(style);
            }
        };
    })