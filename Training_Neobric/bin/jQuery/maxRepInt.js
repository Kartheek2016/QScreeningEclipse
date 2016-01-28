var input = "<p><input type='text'/><button class='del' type='button'>x</button></p>";
$(".add")
		.click(
				function() {
					$("div").append(input);
					$(".del").bind("click", function() {//Technically this is wrong
						$(this).parent().remove();
					});
				});

$(document).ready(function() {
	
});