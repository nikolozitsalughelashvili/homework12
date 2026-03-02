//https://github.com/nikolozitsalughelashvili/homework12.git
//https://github.com/nikolozitsalughelashvili/homework12/settings/pages
// //control
console.log(1);
// function h1() {
//   alert("hello");
// }
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function(ragaca){
//     console.log(ragaca.target);
// });
// const div = document.querySelector("div");
// let para = document.createElement("P");
// let para1 = document.createElement("P");
// para.textContent = "5555erer5";
// para1.textContent = "555555555555";
// //div.appendChild(para);
// //div.appendChild(para);
// div.append("para");
// div.prepend(para);
// //div.prepend(para1);
// //  div.append("dfsdfsdfgrtgt","5",para);
// // div.append("1");
// //div.remove()
// div.replaceChild(para1,para);
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
function addTask() {
  let taskText = taskInput.value;
  if (taskText === "") {
    taskInput.placeholder = "dfdfdfdfdfdfddff";
    return;
  }
  let li = document.createElement("li");
  li.textContent = taskText;
  let deletebtn = document.createElement("button");
  deletebtn.textContent = "წაშლა";
  deletebtn.addEventListener("click", () => li.remove());
  li.appendChild(deletebtn);
  li.addEventListener("click", () => li.classList.toggle("completed"));
  taskList.appendChild(li);
  taskInput.value = "";
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// document.title = "აპლიკაცია";
