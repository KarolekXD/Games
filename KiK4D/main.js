let button = document.querySelectorAll('button');
let tura = "X"
let blok
let SpecBtn
let tabela = document.querySelectorAll('.poleGry')
let tekstTura = document.getElementById("tekstTura")
let mainTableTd = document.querySelectorAll(".mainTableTd")
let obszarGry = document.querySelector(".mainTableDiv")

function podswietlenie(blok) {
	for (let i = 1; i <= 9; i++) {
		tabela[i - 1].style.backgroundColor = "#06D6A0"
		if (i == blok) {
			tabela[i - 1].style.backgroundColor = "#4dffcf"
		}
	}
}

function btnOffOn(blok) {
	for (let i = 0; i <= 80; i++) {
		if (mainTableTd[blok - 1].innerHTML == "X" || mainTableTd[blok - 1].innerHTML == "O") {
			for (let j = 0; j <= 80; j++) {
				button[j].removeAttribute("disabled");
			}
			for (let k = 1; k <= 9; k++) {
				tabela[k - 1].style.backgroundColor = "#4dffcf"
			}
		}
		else{
			button[i].setAttribute("disabled", "true");
			if (button[i].className == blok) {
				button[i].removeAttribute("disabled");
			}
		}
	}
}

function checkWin(symbol, blok, checkWinVar) {
	
	let mnoznikTabeli = checkWinVar - 1;
	const winConditions = [
        [0 , 1, 2], [3, 4, 5], [6, 7, 8], // Wiersze
        [0 , 3, 6], [1, 4, 7], [2, 5, 8], // Kolumny
        [0 , 4, 8], [2, 4, 6] // Przekątne
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
		if (button[a + (mnoznikTabeli * 9)] && button[b + (mnoznikTabeli * 9)] && button[c + (mnoznikTabeli * 9)]) {
			if (
				button[a + (mnoznikTabeli * 9)].innerHTML == symbol &&
				button[b + (mnoznikTabeli * 9)].innerHTML == symbol &&
				button[c + (mnoznikTabeli * 9)].innerHTML == symbol
			) {
				mainTableTd[checkWinVar - 1].style.fontSize = "150px";
				if (symbol == "X") {
					mainTableTd[checkWinVar - 1].style.color = "#FFD166"
				}
				else if (symbol == "O") {
					mainTableTd[checkWinVar - 1].style.color = "#EF476F"
				}
				mainTableTd[checkWinVar - 1].innerHTML = symbol
			}
    	}
	}
}

function checkBigWin(symbol) {
	const bigWinConditions = [
        [0 , 1, 2], [3, 4, 5], [6, 7, 8], // Wiersze
        [0 , 3, 6], [1, 4, 7], [2, 5, 8], // Kolumny
        [0 , 4, 8], [2, 4, 6] // Przekątne
    ];
	for (let p = 0; p < bigWinConditions.length; p++) {
        const [a, b, c] = bigWinConditions[p];
		if (mainTableTd[a] && mainTableTd[b] && mainTableTd[c]) {
			if (
				mainTableTd[a].innerHTML == symbol &&
				mainTableTd[b].innerHTML == symbol &&
				mainTableTd[c].innerHTML == symbol
			) {
				tekstTura.innerHTML = "";
				obszarGry.style.fontSize = "250px"
				obszarGry.style.textAlign = "center"
				obszarGry.innerHTML = `Wygrywa gracz ${symbol}`
			}
		}
	}
}


button.forEach(function (element) {
	element.addEventListener('click', function () {
		console.log(element);
		if(tura == "X"){
			if(element.innerHTML == ""){
			element.style.color = "#FFD166"
			element.innerHTML = "X"
			tura = "O"
			tekstTura.innerHTML = "Teraz tura O"
			blok = element.name
			checkWinVar = element.className
			checkWin("X", blok, checkWinVar)
			podswietlenie(blok)
			btnOffOn(blok)
			checkBigWin("X")
			}
		}
		else{
			if(element.innerHTML == ""){
			element.style.color = "#EF476F"
			element.innerHTML = "O"
			element.value = "O"
			tura = "X"
			tekstTura.innerHTML = "Teraz tura X"
			blok = element.name
			checkWinVar = element.className
			checkWin("O", blok, checkWinVar)
			podswietlenie(blok)
			btnOffOn(blok)
			checkBigWin("O")
			}
		}
	})
})
