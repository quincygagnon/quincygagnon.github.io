	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{//1
		name: "yogurt",
		LactoseIntolerant: false,
		NutAllergy: true,
		Organic: true,
		price: 1.99
	},
	{//2
		name: "almond granola",
		LactoseIntolerant: true,
		NutAllergy: false,
		Organic: true,
		price: 2.35
	},
	{//3
		name: "salmon",
		LactoseIntolerant: true,
		NutAllergy: true,
		Organic: false,
		price: 10.00
	},
	{//4
		name: "rice cake",
		LactoseIntolerant: true,
		NutAllergy: true,
		Organic: false,
		price: 3.00
	},
	{//5
		name: "nutella",
		LactoseIntolerant: true,
		NutAllergy: false,
		Organic: false,
		price: 4.50
	},
	{//6
		name: "oat milk",
		LactoseIntolerant: true,
		NutAllergy: false,
		Organic: true,
		price: 5.50
	},
	{//7
		name: "passion fruit",
		LactoseIntolerant: true,
		NutAllergy: true,
		Organic: true,
		price: 2.00
	},
	{//8
		name: "lofthouse cookies",
		LactoseIntolerant: false,
		NutAllergy: true,
		Organic: false,
		price: 4.00
	},
	{//9
		name: "ramen",
		LactoseIntolerant: true,
		NutAllergy: true,
		Organic: false,
		price: 0.50
	},
	{//10
		name: "cottage cheese",
		LactoseIntolerant: false,
		NutAllergy: true,
		Organic: true,
		price: 3.50
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let products = [];
	console.log(restriction)
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction.includes("LactoseIntolerant")) && (prods[i].LactoseIntolerant == false)){
			
		}
		else if (restriction.includes("NutAllergy") && (prods[i].NutAllergy == false)){
			
		}
		else if (restriction.includes("Organic") && (prods[i].Organic == false)){
			
		}
		else{
			products.push(prods[i]);
		}
	}
	return products;
}




// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
