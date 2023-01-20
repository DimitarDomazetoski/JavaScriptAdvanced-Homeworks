let body = document.getElementsByTagName("body")[0];
let paragraph = document.getElementsByTagName("p")[0];
let randomColor = ["rgb(33, 61, 31)","rgb(71, 84, 170)","rgb(167, 185, 242)","rgb(2, 201, 25)","rgb(191, 42, 139)"];

function selector(element) {
  let randomRGB = randomColor[Math.floor(Math.random()* randomColor.length)];
  element.innerText = `RGB color is: ${randomRGB}`
  return randomRGB
}

body.style.backgroundColor = selector(paragraph);