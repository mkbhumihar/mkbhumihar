var webSocket;
function connect() {
    var username = document.getElementById("username").value;
    var host = document.location.host;
    var pathname = document.location.pathname;
    webSocket = new WebSocket("ws://" +host  + pathname + "chat/" + username);
    webSocket.onopen = function(message){ wsOpen(message);};
    webSocket.onmessage = function(message){ wsGetMessage(message);};
    webSocket.onclose = function(message){ wsClose(message);};
    webSocket.onerror = function(message){ wsError(message);};
}

function wsOpen(message){
	   
}

function chooseFriend(friend){
	console.log(friend);
	var host = document.location.host;
	var pathname = document.location.pathname;
	webSocket = new WebSocket("ws://" +host  + pathname + "/chat/" + friend);
	showSelectedFriend(friend);
	webSocket.onopen = function(message){ wsOpen(message);};
	webSocket.onmessage = function(message){ wsGetMessage(message);};
	webSocket.onclose = function(message){ wsClose(message);};
	webSocket.onerror = function(message){ wsError(message);};
}

function showSelectedFriend(friend){
	document.getElementById('chat_partner_name').innerHTML="<a>"+friend+"</a";	
}



function wsSendMessage(){
    var message = document.getElementById("senderChatInput");
    console.log(message.value)
     var json = JSON.stringify({
        "content":message.value
    });
    webSocket.send(json);
    createSenderBox(message.value);
    message.value = "";
}

function createSenderBox(msg){
	let sender=document.createElement('div');
	sender.className="message-box-holder"
	let cont=document.createElement('div');
	cont.className="message-box";
	let txt= document.createTextNode(msg);
	cont.appendChild(txt);
	sender.appendChild(cont)
	document.getElementById('chatBoxContainer').appendChild(sender);	
}
 function wsCloseConnection(){
       webSocket.close();
 }
        
function wsGetMessage(message){
	createReciverBox(message);
}
function wsClose(message){
   //senderTxt.value += "Disconnect ... \n";
}

function createReciverBox(msg){
	let rcvr=document.createElement('div');
	rcvr.className="message-box-holder"
	let cont=document.createElement('div');
	cont.className="message-sender";
	let part=document.createElement('div');
	part.className="message-box message-partner";
	let txt= document.createTextNode(msg.data);
	part.appendChild(txt);
	rcvr.appendChild(cont);
	rcvr.appendChild(part);

	document.getElementById('chatBoxContainer').appendChild(rcvr);	
}
 
function wsError(message){
   //senderTxt.value += "Error ... \n";
}




