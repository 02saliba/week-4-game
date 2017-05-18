$( document ).ready(function(){

	var randomNumber = 0;
	var crystalNumber = [];
	var wins = 0;
	var losses = 0;
	var total = 0;
	$("#yourWins").html("Wins: " + wins);
	$("#yourLosses").html("Losses: " + losses);
	$(".yourScore").html("Your Current Total: " + total);

		randomNumber = Math.floor(Math.random() * 80 + 20);
			$(".toGet").html("Target Number: " + randomNumber);

		function crystalValues(){
			for(var i = 0; i < 4; i++) {
				var number = Math.floor(Math.random() * 15 + 1)
				crystalNumber.push(number);
			};
		}

		crystalValues();


			$("#one").on ("click", function(){
				total += crystalNumber[0];
				$(".yourScore").html(total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#two").on ("click", function(){
				total += crystalNumber[1];
				$(".yourScore").html(total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#three").on ("click", function(){
				total += crystalNumber[2];
				$(".yourScore").html(total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

			$("#four").on ("click", function(){
				total += crystalNumber[3];
				$(".yourScore").html(total);	

						if (total == randomNumber){
							winner();
						}
						else if ( total > randomNumber){
							loser();
						};	
			});

		function reset() {
			randomNumber = Math.floor(Math.random() * 80) + 20;
				$(".toGet").html("Target Number: " + randomNumber);
			crystalNumber = [];
			crystalValues();
			total = 0;
			$(".yourScore").html("Your Current Total: " + total);
		}

		function winner(){
			alert("You Win!");
			wins++;
			$("#yourWins").html("Wins: " + wins);
			reset();
		}

		function loser(){
			alert("You Lose!");
			losses++;
			$("#yourLosses").html("Losses: " + losses);
			reset();
		}

});