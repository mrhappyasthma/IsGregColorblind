function greg()
{
	var viewID = document.getElementById("view");
	var buttonID = document.getElementById("button");
	var yesID = document.getElementById("yes");
	
	buttonID.innerHTML = '<center> <button type="button" onclick="normal();">Click For Our View</button> </center>';
	viewID.innerHTML = '<center>What Gerg Sees:</center>'; //Intentional typo on "Gerg"
	
	yesID.style.color = "#A9A9A9";
	document.body.style.background = "#A9A9A9";
}

function normal()
{
	var viewID = document.getElementById("view");
	var buttonID = document.getElementById("button");
	var yesID = document.getElementById("yes");
	
	buttonID.innerHTML = '<center> <button type="button" onclick="greg();">Click For Greg\'s View</button> </center>';
	viewID.innerHTML = '<center>What We See:</center>';
	
	
	yesID.style.color = "#FF0000";
	document.body.style.background = "#00EE00";
}