const latin = document.getElementById('latin');
const dekl = document.getElementById('dekl');
const lv = document.getElementById('lv');
const next = document.getElementById('next');
const latinInput = document.getElementById('latin-input');
const check = document.getElementById('check');


const getRndEntry = () => {
    latinInput.value = '';
    latin.classList.remove('wrong', 'correct');
    dekl.classList.remove('wrong', 'correct');
    latin.classList.add('hidden');
    dekl.classList.add('hidden');
    fetch('./fixedLatin.json')
        .then((res) => res.json())
        .then((data) => {
            let rndEntry = Math.floor(Math.random() * data.length);
            
            latin.innerHTML = `${data[rndEntry].Latin}`
            dekl.innerHTML = `${data[rndEntry].Dekl}`
            lv.innerHTML = `${data[rndEntry].Latviski}`
    })
}

const checkAnswer = () => {
    latin.classList.remove('wrong', 'correct');
    dekl.classList.remove('wrong', 'correct');
    if (latinInput.value === latin.innerHTML || latinInput.value === '')
             {
            latin.classList.add('correct');
            dekl.classList.add('correct');
        } else {
            latin.classList.add('wrong');
            dekl.classList.add('wrong');
        }
}

getRndEntry();
next.addEventListener('click', getRndEntry);
check.addEventListener('click', checkAnswer);
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {checkAnswer()};
})