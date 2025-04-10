function randomMolePopout(moles) {
    let rand = Math.floor(Math.random() * moles.length);
    moles[rand].style.bottom = "-12%";
    return rand;
}

function showScore() {
    let startScreen = document.querySelector(".mainWrapper");
    startScreen.style.display = "flex";
    startScreen.innerHTML = `<h1>Wynik końcowy: ${score}</h1>`;
}

function moleGameLogic(timeDuration) {
    let random = null;

    for (let i = 0; i < timeDuration; i++) {
        setTimeout(() => {
            if (random != null) {
                moles[random].style.bottom = "-100%";
            }
            random = randomMolePopout(moles);

            if (i === timeDuration - 1) {
                setTimeout(() => {
                    moles[random].style.bottom = "-100%";
                    showScore();
                }, 1000);
            }
        }, i * 1000 + Math.floor((Math.random() * 500) + 100));
    }
}
