let var1 = 15;

if (var1 > 10){
	var1 = var1 - 5;
} else if (var1 < 10){
	var1 = var1 + 5;
} else{
	var1 = var1 + var1;
}

alert("The new var1 is " + var1);