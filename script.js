      let randomNumber = "TEETH";
      const guesses = document.querySelector('.guesses');
      const resultt = document.querySelector('.resultt');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let guessCount = 1;
      let resetButton;

      function checkGuess() {
        const userGuess = guessField.value;
        if (guessCount === 1) {
          guesses.textContent = 'Previous guesses: ';
          resultt.textContent = 'Previous guesses: ';
        }

        guesses.textContent += userGuess + '\t ';
         
        let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	function ans(W)
	{
		let L = [];
		let I = [];
		for (ch in W)
		{
			if (L.indexOf(W[ch]) == -1)
			{
				L.push(W[ch]);
				I.push(1)
			}
			else
			{
				I[L.indexOf(W[ch])]++;
			}
		}
		return [L, I];
	}
	function word(A, G)
	{
		const len = 5;
		let j = 0;
		let L = ['b', 'b', 'b', 'b', 'b'];
		let x = ans(A);
		let ch = x[0];
		let I = x[1];
		for (let k = 0; k < len; k++)
		{
			if (A[k] == G[k])
			{
				L[k] = 'g';
				I[ch.indexOf(A[k])]--;
			}
		}
		for (let i = 0; i < len; i++)
		{
			for (j = 0; j < len; j++)
			{
				// console.log(I,ch, L);
				if (G[i] == A[j])
				{
					if ((L[i] == 'b') && (I[ch.indexOf(A[j])] > 0))
					{
						L[i] = 'y';
						I[ch.indexOf(A[j])]--;
					}
				}
			}
			
		}
		feedback = L[0] + L[1] + L[2] + L[3] + L[4];
		
	}
	if (userGuess != undefined)
	{
		if (userGuess.length == 5)
		{
			word(randomNumber, userGuess.toUpperCase())
			// res.write(feedback);
			// res.end();
		}
		else
		{
			// res.write("try entering a 5 letter word");
			// res.end();
		}
	}
	

    resultt.textContent += feedback + "\t ";
        if (feedback == 'ggggg') {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 6) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          lowOrHi.textContent = feedback;
        //   if(userGuess < randomNumber) {
        //     lowOrHi.textContent = 'Last guess was too low!' ;
        //   } else if(userGuess > randomNumber) {
        //     lowOrHi.textContent = 'Last guess was too high!';
        //   }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
      }

      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
          resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        // randomNumber = Math.floor(Math.random() * 100) + 1;
      }