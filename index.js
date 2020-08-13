//huge courtesy to my friend Florin for css of the traffic light. https://twitter.com/florinpop1705

let active = 0
let lights = document.querySelectorAll('.circle')

const switchLight = (currentLight) => {
  currentLight.classList.add(currentLight.getAttribute('color'))
}
const turnOffLight = (currentLight) => {
  currentLight.className = 'circle'
}

const changeLight = () => {}

;(async function () {
  try {
  } catch (err) {
    console.log(err)
  }
})()
