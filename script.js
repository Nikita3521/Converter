const currenInput = document.getElementsByClassName('curren-input')
const currenOutput = document.getElementsByClassName('curren-output')
let input = document.getElementById('input')
let output = document.getElementById('output')
let currenInputValue = ''
let currenOutputValue = ''

for (let btn of currenInput) {
    btn.addEventListener('click', (event) => {
        for (let otherBtn of currenInput) {
            otherBtn.classList.remove('active')
        } btn.classList.add('active')
        currenInputValue = event.target.innerText
    })
}

for (let btn of currenOutput) {
    btn.addEventListener('click', (event) => {
        for (let otherBtn of currenOutput) {
            otherBtn.classList.remove('active')
        } btn.classList.add('active')
        currenOutputValue = event.target.innerText
    })
}

async function convert() {
    const resp = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    const data = await resp.json()
    let usd = data.find(item => item.cc === 'USD').rate
    let eur = data.find(item => item.cc === 'EUR').rate
    let uah = 1
    input.addEventListener('input', () => {
        if (currenInputValue === 'UAH₴' && currenOutputValue === 'EUR€') {
            output.value = input.value / eur
        } else if (currenInputValue === 'UAH₴' && currenOutputValue === 'USD$') {
            output.value = input.value / usd
        } else if (currenInputValue === 'EUR€' && currenOutputValue === 'UAH₴') {
            output.value = input.value * eur
        } else if (currenInputValue === 'USD$' && currenOutputValue === 'UAH₴') {
            output.value = input.value * usd
        } else if (currenInputValue === 'UAH₴' && currenOutputValue === 'UAH₴') {
            output.value = input.value
        }
    })
}

convert();