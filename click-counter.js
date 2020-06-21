const buttons = document.querySelectorAll('button')

let count = 0

const incrementCount = () => {
  console.log(count)
  count++
}

buttons.forEach((button) => {
  button.addEventListener('click', incrementCount)
})

// buttons[0].addEventListener('click', incrementCount)

// buttons[1].addEventListener('click', incrementCount)
