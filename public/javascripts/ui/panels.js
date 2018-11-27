function buildPanels(){
	$('#chatPanel').dialog({
		autoOpen: false,
		resizable: false,
		width: 400,
		close: function(event, ui) { 
			ChatController.disconnect();
		}
	});
	$('#loginPanel').dialog({
		autoOpen: true,
		dialogClass: 'no-close',
		width: 190,
		height:75,
		closeOnEscape: false,
		resizable: false
	});
}
