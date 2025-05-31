// queryselector for single
function addTODO() {
  let inputele = document.querySelector("input");
  let value = inputele.value;
  console.log(value);

  let butt = document.querySelector("button");
  console.log(butt.innerHTML);
}

// querySelector for all
let h4 = document.querySelectorAll("h4");
console.log(h4[1].innerHTML);

// get element by id

// document.getElementById("task2").innerText = "GO to work not gym";

// updating the web content
let i = 0;
function clock() {
  console.log((document.getElementById("task2").innerText = `${i}`));
  i++;
}

//setInterval(clock, 1000);


// Deleting

function deleteTODO(){
  let ele = document.querySelector('h4');
  if (ele && ele.parentNode) {
    ele.parentNode.removeChild(ele);
  } else {
    console.warn("Element or its parent not found for index:");
  }
}


let newdiv = document.createElement('h4')
newdiv.innerHTML = '3. This is new h4';
document.querySelector("body").appendChild(newdiv)