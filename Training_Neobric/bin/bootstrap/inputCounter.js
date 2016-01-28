var count = 0;
$(document).ready(function() {
	$('#input').keydown(function() {
		var len = $(this).val();
		count = 12- len.length;
		$("#badge").html(count);
		switch(count){
		case (10):
			$('#input').css("form-control-danger");
		break;
		}
	});
});