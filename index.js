var style = [
  'burrito',
  'bowl'
]

// 1 serving, double serving, half and half.
var protein = [
  'chicken',
  'steak',
  'carnitas',
  'barbacoa'
]

// either or both
var beans = [
  'none',
  'pinto',
  'black'
]

var rice = [
  'none',
  'white',
  'brown'
]

var veggies = Boolean

// min 2 to all of them
var toppings = [
  'mild',
  'medium',
  'hot',
  'sour cream',
  'corn',
  'cheese',
  'guacamole',
  'lettuce'
]

var chips = Boolean

function one(l) {
  return l.sort(function () { return Math.random() - 0.5 }).pop()
}

function both(l) {
  if (Math.random() > 0.8) {
    return 'both'
  } else {
    return one(l)
  }
}

function modified(l) {
  var r = Math.random()
  if (r > 0.9) {
    return 'double ' + one(l)
  } else if (r > 0.8) {
    return 'half ' + one(l) + ' half ' + one(l)
  } else {
    return one(l)
  }
}

function many(l, x) {
  var n = Math.floor(Math.random() * (l.length - 1)) + x
  return Array.apply(Array, Array(n)).map(function () {
    return one(l)
  })
}

function getRandomChipotle() {
  return {
    style: one(style),
    rice: one(rice),
    beans: both(beans),
    protein: modified(protein),
    veggies: Math.random() > 0.5,
    toppings: many(toppings, 2),
    chips: Math.random() > 0.85
  }
}

console.log(getRandomChipotle())
