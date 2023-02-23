// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const hintScreen = document.querySelector('.hint')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
let randomNumber = Math.round(Math.random() * (10 - 0) + 0)
let attemp = 1
let validNumber = true

console.log(randomNumber)
//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
/*keydown é o evendo de uma tecla apertada para ver o nome da tecla console.log(e.key)*/
document.addEventListener('keydown', enterRefresh)

//Validação
function checkValidNumber() {
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    validNumber = false
    alert('Por favor, insira um número entre 0 e 10 somente.')
  } else {
    validNumber = true
  }
}

// Funções
function handleTryClick(event) {
  event.preventDefault()
  checkValidNumber()
  showHint()

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Acertou em ${attemp} tentativas!`
  } else if (inputNumber.value != '' && validNumber == true) {
    inputNumber.value = ''
    attemp++
  }
}

function handleResetClick() {
  toggleScreen()
  attemp = 1
  randomNumber = Math.round(Math.random() * (10 - 0) + 0)
  inputNumber.value = ''
  console.log(randomNumber)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  hintScreen.classList.add('hide')
}

function showHint() {
  if (
    randomNumber - 2 <= Number(inputNumber.value) &&
    Number(inputNumber.value) <= randomNumber + 2
  ) {
    hintScreen.classList.remove('hide')
  } else {
    hintScreen.classList.add('hide')
  }
}

function enterRefresh(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
