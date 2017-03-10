var crystals = {
	c1 : 0,
	c2 : 0,
	c3 : 0,
	c4 : 0
}
var start = 0
var wins = 0
var losses = 0
var num = 0

$(".losses").text(losses)
$(".wins").text(wins)

game()

function game (){
	$(".guess").text(start)

	function random (){

	var tempc1 = Math.floor((Math.random() * 12) + 1)
	var tempc2 = Math.floor((Math.random() * 12) + 1)
	var tempc3 = Math.floor((Math.random() * 12) + 1)
	var tempc4 = Math.floor((Math.random() * 12) + 1)

	crystals.c1 = tempc1
	crystals.c2 = tempc2
	crystals.c3 = tempc3
	crystals.c4 = tempc4

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max-min +1)) + min
	}

	var temp2 = getRandomInt(19,120)
	num = temp2	
	$(".magicnumber").text(num)
	}
	random ()


	function clear(){
		start = 0
		$(".guess").text(start)
		random ()
		}

	function guess (){
		if (start === num)
			{
			alert("You are connected to a universe. It is suggesting a lottery ticket");
			wins = parseFloat(wins) + 1
			$(".wins").text(wins)
			clear()
			}
		else if (start > num)
		{
			alert("Is Mercury in Retrograde? Try again")
			losses = parseFloat(losses) + parseInt(1)
			$(".losses").text(losses)
			clear()
		}
		else {
			$(".guess").text(start)
		}

	}
	
	$(".crystal1").click(function()
	{
		start = parseFloat(crystals.c1) + parseFloat(start)
		guess()
	})
	$(".crystal2").click(function()
	{
		start = parseFloat(crystals.c2) + parseFloat(start)
		guess ()
	})
	$(".crystal3").click(function()
	{
		start = parseFloat(crystals.c3) + parseFloat(start)
		guess ()
	})
	$(".crystal4").click(function()
	{
		start = parseFloat(crystals.c4) + parseFloat(start)
		guess ()
	})
}
