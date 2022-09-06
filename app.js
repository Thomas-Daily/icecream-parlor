const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

function drawScoopIMG() {
  let imgdiv = document.getElementById('plcImgIC')
  let template = ''

  iceCream.forEach(img => {
    template += `
    <img onclick = "addScoopToCart('${img.name}')" class ="img col-6" src='${img.image}' alt="Ice Cream">`
  })

  imgdiv.innerHTML = template
}

function addScoopToCart(name) {
  let scoop = iceCream.find(scoop => scoop.name == name)
  console.log(scoop)
  //@ts-ignore
  scoop.quantity++
  console.log(scoop.quantity)
  drawScoopInCart()

}

function drawScoopInCart() {
  let scoopCart = document.getElementById('scoops')
  let template = ''

  iceCream.forEach(scoop => {
    let scoopTotal = scoop.price * scoop.quantity
    if (scoop.quantity > 0) {
      template += `
      <p>${scoop.name}</p>
      <p>x${scoop.quantity}</p>
      <p>$${scoopTotal}</p>`
    }
  })
  scoopCart.innerHTML = template
  drawTotal()
}

////////////////////////////////////////

function drawVesselIMG() {
  let imgdiv = document.getElementById('plcImgV')
  let template = ''

  vessels.forEach(img => {
    template += `
    <img onclick = "addVesselToCart('${img.name}')" class ="img col-6" src='${img.image}' alt="Ice Cream">`
  })

  imgdiv.innerHTML = template
}

function addVesselToCart(name) {
  let vessel = vessels.find(vessel => vessel.name == name)
  console.log(vessel)
  //@ts-ignore
  vessel.quantity++
  console.log(vessel.quantity)
  drawVesselInCart()
}

function drawVesselInCart() {
  let vesselCart = document.getElementById('vessel')
  let template = ''

  vessels.forEach(vessel => {
    let vesselTotal = vessel.price * vessel.quantity
    if (vessel.quantity > 0) {
      template += `
      <p>${vessel.name}</p>
      <p>x${vessel.quantity}</p>
      <p>$${vesselTotal}</p>`
    }
  })
  vesselCart.innerHTML = template
  drawTotal()
}

///////////////////////////////////

function drawToppingsIMG() {
  let imgdiv = document.getElementById('plcImgT')
  let template = ''

  toppings.forEach(img => {
    template += `
    <img onclick="addToppingToCart('${img.name}')" class ="img col-6" src='${img.image}' alt="Ice Cream">`
  })

  imgdiv.innerHTML = template
}

function addToppingToCart(name) {
  let topping = toppings.find(topping => topping.name == name)
  console.log(topping)
  //@ts-ignore
  topping.quantity++
  console.log(topping.quantity)
  drawToppingInCart()
}

function drawToppingInCart() {
  let toppingCart = document.getElementById('toppings')
  let template = ''

  toppings.forEach(topping => {
    let toppingTotal = topping.price * topping.quantity
    if (topping.quantity > 0) {
      template += `
      <p>${topping.name}</p>
      <p>x${topping.quantity}</p>
      <p>$${toppingTotal}</p>`
    }
  })
  toppingCart.innerHTML = template
  drawTotal()
}

//////////////////////

function drawTotal() {
  let totalbox = document.getElementById('total')
  let total = 0
  let toppingTotal = 0
  let vesselTotal = 0
  let scoopTotal = 0

  toppings.forEach(topping => {
    toppingTotal += topping.price * topping.quantity
  })
  vessels.forEach(vessel => {
    vesselTotal += vessel.price * vessel.quantity
  })
  iceCream.forEach(scoop => {
    scoopTotal += scoop.price * scoop.quantity
  })

  total = toppingTotal + vesselTotal + scoopTotal
  console.log(total)
  if (total > 0) {
    template = `
      <p><b>TOTAL:</b></p>
      <p>$${total}</p>`
  }
  totalbox.innerHTML = template


}

drawScoopIMG()
drawToppingsIMG()
drawVesselIMG()
drawTotal()