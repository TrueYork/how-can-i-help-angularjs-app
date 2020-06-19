angular.module('chatApp')
    .factory('messagingService', function MessagingServiceFactory($q) {
    function MessagingService() {
        this.ws = null;
        this.pendingMessageQueue = [];
    }
    
    MessagingService.prototype.init = function() {
        this.ws = new WebSocket('ws://localhost:8333');
    
        this.ws.onopen = function() {
            while(this.pendingMessageQueue.length) {
                this.ws.send(this.pendingMessageQueue.shift());
            }
        }.bind(this);

        this.ws.onmessage = function(event) {
            $q.resolve().then(() => this.onMessage(event.data));
        }.bind(this);
    }
    
    MessagingService.prototype.isOpen = function() {
        return Boolean(this.ws) && this.ws.readyState === WebSocket.OPEN;
    }
    
    MessagingService.prototype.sendMessage = function({msg}) {
        if (!this.isOpen()) {
            this.pendingMessageQueue.push(msg);
        } else {
            this.ws.send(msg);
        }
    }
    
    MessagingService.prototype.destroy = function() {
        if (this.ws) this.ws.close();
    }
    
    return new MessagingService;
});