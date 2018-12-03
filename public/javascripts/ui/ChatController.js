var ChatController = {

	connect: function(){
		var user = $("#userNameInput, #userNameInput_in").val();

		if($("#username_chat").attr('value')){
			SocketClient.init($("#username_chat").attr('value'));
		}else if(user != ''){
			// $('#loginPanel').dialog('close');
			$('#chatPanel').dialog('open');
			$("#msgInput").focus();
			SocketClient.init(user);
		}else{
			// $('#loginPanel').dialog('close');
			// $('#chatPanel').dialog('open');
			// $("#msgInput").focus();
			SocketClient.init(user);
		}
	},
	
	disconnect: function (){
		SocketClient.close();
		// this.resetUI();
	},
	
	resetUI: function (){
		$('#messages').html('');
		$("#loginPanel").dialog('open');
		$('#chatPanel').dialog('close');
	},
	
	dispatch: function (message){

		var cmd = '';
		var param = '';
		
		if(message.indexOf('/') === 0){
			cmd = message.split(' ')[0];
			param = message.split(' ')[1];

		}

		switch(cmd){
			case '/updateUserList': 
				$("#users").html('');
				$("#users").append(param.replaceAll(',','<br/>', true));			
				break;
			default:
				message = replaceURLWithHTMLLinks(message);
				$('#messages').append(new Date().toLocaleTimeString('en-US',
																	{hour12:false, 
																	 hour:"numeric",
																	 minute:"numeric"})+" | "+message+"<br/>");
				$('#messages').stop().animate({ scrollTop: $("#messages")[0].scrollHeight }, 800);
				break;
		}
	}
};


