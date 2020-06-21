const button = document.querySelector('button')
const body = document.querySelector('body')

const renderClickyH1 = () => {
  const h1 = document.createElement('h1')
  h1.innerHTML = 'WE CLICK AND MADE SOMETHING'
  body.appendChild(h1)

  return body.appendChild(h1)
}

setTimeout(renderClickyH1, 3000)
