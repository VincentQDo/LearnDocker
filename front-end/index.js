let num = 0
const test = document.getElementsByClassName("number")[0]
test.innerText = num
let incVar = 0
let decVar = 0

fetch('http://localhost:3000/counter', { mode: 'no-cors' })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.error(res.status)
    }
  })
  .then(jsonRes => {
    console.log(jsonRes)
  })

function numChange(changeNum) {
  num += Number(changeNum)
  test.innerText = num
}

function increaseClicked() {
  incVar = document.getElementById("increaseVar").value
  console.log(incVar)
  numChange(incVar)
}

function decreaseClicked() {
  decVar = document.getElementById("decreaseVar").value
  console.log(decVar)
  numChange(decVar * (-1))
}

function reset() {
  num = 0
  test.innerText = num
}