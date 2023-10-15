var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var numThree = document.getElementById("num-three");
var numFour = document.getElementById("num-four");
var numFive = document.getElementById("num-five");
var numSix = document.getElementById("num-six");
var addSum = document.getElementById("add-sum");
var addSum2 = document.getElementById("add-sum2")
var addSum3 = document.getElementById("add-sum3")


numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);
numThree.addEventListener("input", add1);	
numFour.addEventListener("input", add1)
numFive.addEventListener("input", add2);
numSix.addEventListener("input", add2)

function add() {
	var one= parseFloat(numOne.value) || 0;
	var two= parseFloat(numTwo.value) || 0;
	addSum.innerHTML= "Your sum is :"+(one+two);
}

function add1() {
	var three = parseFloat(numThree.value) || 0;
	var four = parseFloat(numFour.value) || 0;
	addSum2.innerHTML= "Your sum is:"+(three+four);
}

function add2() {
	var five = parseFloat(numFive.value) || 0; 
	var six = parseFloat(numSix.value) || 0;
	addSum3.innerHTML= "Your sum is:"+(five+six);
}


