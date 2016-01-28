var categories = [ {
	id : 1,
	name : "Food"
	}, {
	id : 2,
	name : "Stationary"
	}, {
	id : 3,
	name : "Electronic Gadgets"
	}, {
	id : 4,
	name : "Clothes"
	} ];
var products = [ {
	id : 1,
	name : "Burger",
	category_id : 1
	}, {
	id : 2,
	name : "Pizza",
	category_id : 1
	}, {
	id : 3,
	name : "Book",
	category_id : 2
	}, {
	id : 4,
	name : "Pen",
	category_id : 2
	}, {
	id : 5,
	name : "iPod",
	category_id : 3
	}, {
	id : 6,
	name : "Headset",
	category_id : 3
	}, {
	id : 7,
	name : "Shirts",
	category_id : 4
	}, {
	id : 8,
	name : "Jeans",
	category_id : 4
	}, ];         
var listProducts = function(){
	var table = "";
	for(var j = 0; j < products.length; j++){
		table += "<tr>"; 
		table += '<td>' + products[j].id + '</td>';
		table += '<td>' + products[j].name + '</td>';
		for(var i = 0; i < categories.length; i++){
			if(products[j].category_id === categories[i].id){
				table += '<td>' + categories[i].name + '</td>';
			}
		}
		table += "</tr>";		
	}
	document.getElementById("tbody").innerHTML = table;
}
