$(document).ready(function(){
	$("#myBtn").click(function(){
        var userInput = $("#number").val();

        var newValue = parseInt(userInput);
        var i;
        var myArray = [];
        var j;
        var k;
        var l;

        for (i = 1; i <= newValue; i++){
            myArray.push(i);
        }

        for (j = 2; j < myArray.length; j+=3){
        	myArray[j] = "ping";
        }

        for (k = 4; k < myArray.length; k+=5){
        	myArray[k] = "pong";
        }

        for (l = 14; l < myArray.length; l+=15){
        	myArray[l] = "ping pong";
        }

        alert(myArray);
	});
});