// // queryselector for single
// function addTODO() {
//   let inputele = document.querySelector("input");
//   let value = inputele.value;
//   console.log(value);

//   let butt = document.querySelector("button");
//   console.log(butt.innerHTML);
// }

// // querySelector for all
// let h4 = document.querySelectorAll("h4");
// console.log(h4[1].innerHTML);

// // get element by id

// // document.getElementById("task2").innerText = "GO to work not gym";

// // updating the web content
// let i = 0;
// function clock() {
//   console.log((document.getElementById("task2").innerText = `${i}`));
//   i++;
// }

// //setInterval(clock, 1000);

// // Deleting

// function deleteTODO(){
//   let ele = document.querySelector('h4');
//   if (ele && ele.parentNode) {
//     ele.parentNode.removeChild(ele);
//   } else {
//     console.warn("Element or its parent not found for index:");
//   }
// }

// let newdiv = document.createElement('h4')
// newdiv.innerHTML = '3. This is new h4';
// document.querySelector("body").appendChild(newdiv)
let todos = [];
let idn = 0;

function updateTODO(id) {
  let ele = document.getElementById(id);
  let currentText = ele.childNodes[0].nodeValue.trim();

  let input = document.createElement("input");
  input.type = "text";
  input.value = currentText;

  let saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.onclick = function () {
    ele.innerHTML = `${input.value} <button onClick="deleteTODO(${id})">Delete</button>  <button onClick="updateTODO(${id})">Update</button>`;
  };

  ele.innerHTML = "";
  ele.appendChild(input);
  ele.appendChild(saveBtn);
}

function deleteTODO(id) {
  todos.splice(id, 1);
  todocomponent();
}

function addTODO() {
  todos.push({ title: document.querySelector("input").value });
  document.querySelector("input").value = "";
  todocomponent();
}

function todocomponent() {
  document.querySelector("#todo").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let button = document.createElement("button");
    div.setAttribute("id", i);
    button.innerHTML = "Delete";
    button.onclick = function () {
      deleteTODO(i);
    };
    h1.innerHTML = todos[i].title;
    div.appendChild(h1);
    div.appendChild(button);
    document.querySelector("#todo").appendChild(div);
  }
}
