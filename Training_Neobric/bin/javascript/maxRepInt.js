//var input = "";
// var count = 1;
var addCheckbox = function() {
	// input += "<p id=" + count + "><input type='text'/><button type='button'
	// onclick='delCheckbox(" + count + ")'>x</button></p>";
	// count += 1;
	var input = "<p><input type='text'/><button type='button' onclick='delCheckbox(this)'>x</button></p>";
	document.getElementById("div").innerHTML += input;
}
var delCheckbox = function(current) {
	// document.getElementById(current).remove();
	current.parentElement.remove();
}
var rep = {};
var num;
var maxNum;
var maxRepInt = function() {
	var elements = document.getElementById("div").elements;
	for (var i = 1; i < elements.length(); i++) {
		num = document.getElementById(i.toString()).childNodes[0].value;
		typeof rep[num] != "undefined" ? rep[num]++ : rep[num] = 1;
	}
	// console.log(rep);
	var max = 0;
	for ( var k in rep) {
		if (max < rep[k]) {
			maxNum = k;
			max = rep[k];
		}
	}
	document.getElementById("p").innerHTML = maxNum;
}