<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Chat User</title>
<link href="css/css.css" rel="stylesheet" type="text/css" />
<link href="css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script type="text/javascript" src="js/chat.js"></script>
</head>
<body>
	<div class="chatbox-holder">
		<div class="chat">
			<div class="contacts_card">
				<div class="card-header">
					<div class="input-group">
						<input type="text" placeholder="Search..." name=""
							class="form-control search">
						<div class="input-group-prepend">
							<span class="input-group-text search_btn"><i
								class="fas fa-search"></i></span>
						</div>
					</div>
				</div>
				<div class="card-body contacts_body">
					<ui class="contacts">
					<li class="active">
						<div class="d-flex bd-highlight">
							<div class="img_cont">
								<img src="img/male.png" class="rounded-circle user_img"> <span
									class="online_icon"></span>
							</div>
							<div class="user_info">
								<span>Mohan</span>
							</div>
						</div>
					</li>
					<li>
						<div class="d-flex bd-highlight">
							<div class="img_cont">
								<img src="img/male.png" class="rounded-circle user_img"> <span
									class="online_icon offline"></span>
							</div>
							<div class="user_info">
								<span>Shalini</span>
							</div>
						</div>
					</li>
					</ui>
				</div>
			</div>
			<div class="chatbox">
				<div class="chatbox-top">
					<div class="chat-partner-name">
						<span class="status online"></span> <a target="_blank">Mohan</a>
					</div>
					<div class="chatbox-icons">
						<a href="javascript:void(0);"><i class="fa fa-minus"></i></a> <a
							href="javascript:void(0);"><i class="fa fa-close"></i></a>
					</div>
				</div>

				<div id="chatBoxContainer" class="chat-messages">
					<div class="message-box-holder">
						<div class="message-box">Welcome ...</div>
					</div>

				</div>

				<div class="chat-input-holder">
					<form>
						<textarea id="senderChatInput" class="chat-input"></textarea>
						<input onclick="wsSendMessage();" class="message-send"
							value="Send" type="button">
					</form>
					<br> <br>
				</div>
			</div>
		</div>
	</div>
</body>

</html>