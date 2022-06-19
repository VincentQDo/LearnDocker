let num = 0
const test = document.getElementsByClassName("number")[0]
test.innerText = num
let incVar = 1
let decVar = 1

fetch('http://localhost:3000/counter', { method: 'GET', headers: { 'Access-Control-Allow-Origin': '*' } })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.error('some error here ', res)
    }
  })
  .then(jsonRes => {
    console.log(jsonRes[0])
    setNum(Number(jsonRes[0].current_num))
  })
  .catch(err => {
    console.log(err)
  })

async function updateNumsInDb(val) {
  const data = {
    counter: val
  }
  const response = await fetch('http://localhost:3000/counter',
    {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      } else {
        console.error('some error here ', res)
      }
    })
  console.log(response)
  return response
}

function numChange(changeNum) {
  num += Number(changeNum)
  test.innerText = num
}

function increaseClicked() {
  incVar = document.getElementById("increaseVar").value
  console.log(incVar)
  numChange(incVar)
  updateNumsInDb(num)
}

function decreaseClicked() {
  decVar = document.getElementById("decreaseVar").value
  console.log(decVar)
  numChange(decVar * (-1))
  updateNumsInDb(num)
}

function setNum(val) {
  num = val
  test.innerText = num
  updateNumsInDb(num)
}