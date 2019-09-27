const addButton = document.getElementById('addButton')
const num1 = document. getElementById('num1')
const num2 = document. getElementById('num2')
const output = document.getElementById('output')

addButton.addEventListener('click', addButtonClicked)

function addButtonClicked() {
    const numb1Input = document.getElementById('num1')
    const numb1String = numb1Input.value
    const number1 = parseInt(num1String, 16)

    const numb2Input = document.getElementById('num2')
    const numb2String = numb2Input.value
    const number2 = parseInt(num2String, 16)

    const sum = number1 + number2
    const outputDiv = document.getElementById('Output')
    outputDiv.innerHTML = "The sum of two numbers is" + sum
}