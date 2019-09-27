const addButton = document.getElementById('addButton')

addButton.addEventListener('click', addButtonClicked)

function addButtonClicked() {
    const numb1Input = document.getElementById('num')
    const numb1String = numb1Input.value
    const number1 = parseInt(num1String, 16)

    const numb2Input = document.getElementById('num2')
    const numb1String = numb1Input.value
    const number2 = parseInt(num2String, 16)

    const sum = number1 + number2
    const outputDiv = document.getElementById('Output')
    outputDiv.innerHTML = "The sum of two numbers is" + sum
}