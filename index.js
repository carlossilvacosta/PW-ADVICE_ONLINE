const btAdvice = document.getElementById("btAdvice");
const resultAdvice = document.getElementById("advice");
const btAgain = document.getElementById("btAgain");

const getAdvice = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            resultAdvice.innerHTML = `<h3>- "${data.slip.advice}"</h3>`;
        })
        .catch((error) => {
            resultAdvice.innerHTML = `Error getting advice: ${error}`;
        })
}

const handleBtAdviceClick = () => {
    getAdvice("https://api.adviceslip.com/advice");
    btAdvice.disabled = true;
}

const handleBtAgainClick = () => {
    btAdvice.disabled = false;
    resultAdvice.innerHTML = '';
}

btAdvice.onclick = handleBtAdviceClick;
btAgain.onclick = handleBtAgainClick;