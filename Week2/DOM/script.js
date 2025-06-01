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
  let ele = document.getElementById(id);
  ele.parentElement.removeChild(ele);
}

function addTODO() {
  let val = document.querySelector("input").value;
  let div = document.createElement("div");
  idn = idn + 1;
  div.setAttribute("id", idn);
  div.innerHTML = `${val} <button onClick="deleteTODO(${idn})">Delete<button/>  <button onClick="updateTODO(${idn})">Update<button/>`;

  document.querySelector("body").appendChild(div);
  document.querySelector("input").value = "";
}
