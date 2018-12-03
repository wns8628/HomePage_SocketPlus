function bindKeyboardEvents(){

// ENTER-event on message input field
	$('#msgInput').bind('keypress', function(e) {
		if(e.keyCode==13){
			var msg = $("#msgInput").val().replace(/(<([^>]+)>)/ig,"");
			if(msg != ''){
				SocketClient.sendMessage(msg);
				$("#msgInput").val('');
			}			
		}
	});
	
	//처음접속 
	if($("#username_chat").attr('value')){ //로그인되어있으면
		ChatController.connect();
		$("#msgInput").attr("readonly",false).attr("disabled",false); //활성화
		$("#userNameInput, #userNameInput_in").attr('disabled','disabled'); //닉네임적는거 비활성화 이미있으니까
		$('#socket-btn').attr('disabled','disabled');
		$('#socket-btn').html("로그인됨");
		$('#socket-btn').attr("class","btn btn-success");
		$('#userNameInput, #userNameInput_in').attr("placeholder",$("#username_chat").attr('value'));
		$('#chatin_toggle').attr("class","btn btn-success col-12");
	}else{
		ChatController.connect();
		$("#msgInput").attr('disabled',true);	
	}

	//버튼접속
	$('#socket-btn').click(function(){
		if($('#userNameInput , #userNameInput_in').val() != ''){
			ChatController.disconnect();//onRead를 끊고 닉넴으로한다.			
			ChatController.connect();
			$("#msgInput").attr("readonly",false).attr("disabled",false); //활성화
			$("#userNameInput, #userNameInput_in").attr('disabled','disabled');		//닉네임적는거 비활성화 이미있으니까
			$('#socket-btn').attr('disabled','disabled');
			$('#socket-btn').html("접속완료");
			$('#socket-btn').attr("class","btn btn-success");
			$('#chatin_toggle').attr("class","btn btn-success col-12");
		}
	});
 
	//접속후 닉네임입력후 채팅접속  엔터접속
	$('#userNameInput, #userNameInput_in').bind('keypress', function(e) {
		if(e.keyCode==13){
			if($('#userNameInput, #userNameInput_in').val() != ''){
				ChatController.disconnect();//onRead를 끊고 닉넴으로한다.			
				ChatController.connect();
				$("#msgInput").attr("readonly",false).attr("disabled",false); //활성화
				$("#userNameInput, #userNameInput_in").attr('disabled','disabled');		//닉네임적는거 비활성화 이미있으니까
				$('#socket-btn').attr('disabled','disabled');
				$('#socket-btn').html("접속완료");
				$('#socket-btn').attr("class","btn btn-success");
				$('#chatin_toggle').attr("class","btn btn-success col-12");
			}
		}
	});
}
