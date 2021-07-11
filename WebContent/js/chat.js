var webSocket = new WebSocket("ws://localhost:8080/chat/917312");
webSocket.onopen = function(message){ wsOpen(message);};
webSocket.onmessage = function(message){ wsGetMessage(message);};
webSocket.onclose = function(message){ wsClose(message);};
webSocket.onerror = function(message){ wsError(message);};


function wsOpen(message){
	   
}



function wsSendMessage(){
    var message = document.getElementById("senderChatInput");
    console.log(message.value)
    webSocket.send(message.value);
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

