(function(){
    let socket = new WebSocket('ws://localhost:8080');
    let status = document.getElementById('status');

    socket.onopen = function(){
        status.innerHTML = 'connected';
    };
    socket.onclose = function(event){
        if( event.wasClean ){
            status.innerHTML = 'closed';
        }else{
            status.innerHTML = 'closed some';
        }
    };
    socket.onmessage = function(event){
        let message = JSON.parse(event.data);
        let div = document.getElementById('messages-field');
        let innerDiv = document.createElement('div');
        let h3 = document.createElement('h3');
        innerDiv.classList.add('response');
        h3.innerHTML = `${message.name}: ${message.msg}`;
        innerDiv.appendChild(h3);
        div.insertBefore(innerDiv, div.childNodes[0]);
        document.getElementById('textField').value = '';
    };
    socket.onerror = function(event){
        status.innerHTML = 'error ' + event.message;
    };
    document.forms['messages'].send = function(){
        let error = false;
        document.getElementById('name-error').innerHTML = '';
        document.getElementById('message-error').innerHTML = '';
        if (this.name.value === '') {
            document.getElementById('name-error').innerHTML = 'Error: required!';
            error = true;
        }
        if (this.msg.value === '') {
            document.getElementById('message-error').innerHTML = 'Error: required!';
            error = true;
        }
        if (error) {
            return null;
        }
        let message = {
            name: this.name.value,
            msg: this.msg.value
        };
        socket.send(JSON.stringify(message));
        return null;
    };
})();
