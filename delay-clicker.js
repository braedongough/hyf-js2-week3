const button = document.getElementById('log-button')

const logAfter3Seconds = () => {
  console.log('This text was delayed by 3 seconds')
}

let clicked = false

const handleClick = () => {
  setTimeout(logAfter3Seconds, 3000)
  click = true
}

button.addEventListener('click', handleClick)
