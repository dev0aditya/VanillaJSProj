const input = document.querySelector(".inputTodo input");
const TodoData = document.querySelector(".todoData");
const CompletedTask = document.querySelector(".finish-data");
const DataArray = [];
const CompleteArray = [];

function addTodo() {
  if (input.value !== "") {
    input.style.borderColor = "#543310";
    const DataBox = document.createElement("div");
    DataBox.classList.add("data");

    const para = document.createElement("p");
    para.innerHTML = input.value;
    DataBox.appendChild(para);
    DataArray.push(input.value);
    input.value = "";

    const Function = document.createElement("div");
    Function.classList.add("function");
    DataBox.appendChild(Function);

    const Edit = document.createElement("span");
    Edit.classList.add("edit");
    Edit.innerHTML = `<i class="fa-solid fa-pencil"></i>`;
    Function.appendChild(Edit);

    const Complete = document.createElement("span");
    Complete.classList.add("complete");
    Complete.innerHTML = `<i class="fa-solid fa-check"></i>`;
    Function.appendChild(Complete);
    Complete.addEventListener("click", () => taskComplete(para, DataBox));

    const Delete = document.createElement("span");
    Delete.classList.add("delete");
    Delete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    Function.appendChild(Delete);

    TodoData.appendChild(DataBox);
  } else {
    input.style.borderColor = "#cb0404";
  }
}

function taskComplete(para, DataBox) {
  para.style.textDecoration = "line-through";

  setTimeout(() => {
    DataBox.style.opacity = "0";
    TodoData.removeChild(DataBox);
  }, 250);

  const CompleteData = document.createElement("div");
  CompleteData.classList.add("fdata");

  const parao = document.createElement("p");
  parao.innerHTML = para.innerHTML;
  CompleteData.appendChild(parao);

  const Function = document.createElement("div");
  Function.classList.add("function");
  CompleteData.appendChild(Function);

  const Restore = document.createElement("span");
  Restore.classList.add("restore");
  Restore.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i>`;
  Function.appendChild(Restore);

  const Delete = document.createElement("span");
  Delete.classList.add("delete");
  Delete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  Function.appendChild(Delete);

  CompletedTask.appendChild(CompleteData);
}
