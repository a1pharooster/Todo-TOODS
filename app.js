var inputval = document.getElementById("inputval");
var btn = document.getElementById("btn");
var todolist = document.getElementById("todolist");
let c = 0;
function add(){
    if (inputval.value == "") {
        return;
      }
      var task = document.createElement("div");
      var deletebtn = document.createElement("i");
      var checker = document.createElement("i");
    
      task.setAttribute("class", "task");
      deletebtn.setAttribute("class", "fa-2x fa fa-trash");
      checker.setAttribute("class", "fa-2x fa-regular fa-square");
    
      var text = document.createElement("p");
      text.setAttribute("class", "ptask");
      text.innerText = inputval.value;
    
      todolist.appendChild(task);
      task.appendChild(checker);
      task.appendChild(text);
      task.appendChild(deletebtn);
    
      deletebtn.addEventListener("click", e=> {
        task.remove();
      })
      task.addEventListener("click", e=> {
           if(checker.classList.contains("fa-square")){
            checker.classList.remove("fa-2x","fa-regular","fa-square")
            checker.classList.add("fa-2x","fa-solid" ,"fa-square-check")
          }
          else{
            checker.classList.remove("fa-2x","fa-solid" ,"fa-square-check")
            checker.classList.add("fa-2x","fa-regular","fa-square")
          }
         
      })
      
    
      inputval.value = ""; //to clear placeholder
}
function control(e){
    if(e.keyCode === 13)
    {
        add();
    }
}


document.addEventListener("keydown", control)

btn.addEventListener("click", (e) => {
  add()
});


