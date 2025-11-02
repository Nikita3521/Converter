const currenInput = document.getElementsByClassName('curren-input')
const currenOutput = document.getElementsByClassName('curren-output')
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