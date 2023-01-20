let names = ["Dimitar", "Stefan","Marija","Filip", "Ana"];
let button = document.getElementsByTagName("button")[0];
let list = document.getElementsByTagName("ul")[0];

function addNames (students, elements) {
  for(let name of students){
    elements.innerHTML += `<li>${name}</li>`;
  }
}

button.addEventListener("click", function(){
  addNames(names, list);
})