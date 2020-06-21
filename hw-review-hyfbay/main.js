console.log('Script loaded')

const products = getAvailableProducts()

const sortByCheapest = (productA, productB) => {
  if (productA.price < productB.price) {
    return -1
  } else if (productA.price > productB.price) {
    return 1
  } else return 0
}

const sortByMostExpensive = (productA, productB) => {
  if (productA.price > productB.price) {
    return -1
  } else if (productA.price < productB.price) {
    return 1
  } else return 0
}

const sortByName = (productA, productB) => {
  if (productA.name < productB.name) {
    return -1
  } else if (productA.name > productB.name) {
    return 1
  } else return 0
}

const sorters = {
  name: sortByName,
  cheap: sortByCheapest,
  expensive: sortByMostExpensive,
}

let sorter = sorters['cheap']

const productsUl = document.querySelector('section.products ul')
console.log(productsUl)

function renderProducts(products) {
  products.sort(sorter)
  products.forEach((product) => {
    const li = document.createElement('li')

    let shipsToHTML = ''
    product.shipsTo.forEach((country) => (shipsToHTML += `<li>${country}</li>`))

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `
    productsUl.appendChild(li)
  })
}

renderProducts(products)

const selectSorter = document.getElementById('sort')

selectSorter.addEventListener('change', (event) => {
  const value = event.target.value
  sorter = sorters[value]
  console.log(sorter)
  renderProducts()
})
