moles.forEach(mole => {
    mole.addEventListener('click', () => {
        mole.style.bottom = "-100%";
        score++;
        console.log(score);
    });
});

startBtn.addEventListener('click', () => {
    startScreen.style.display = "none";
    let time = document.getElementById("timeInput").value;
    moleGameLogic(time); 
});