// ELementler
const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const todoinput = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
const list = document.querySelector(".list-group");
const clearall = document.querySelector("#clear-todos");
const filter = document.querySelector("#filter")
// Eventlistener
eventlistener()
function eventlistener(){
    form.addEventListener("submit",addtodo);
    document.addEventListener("DOMContentLoaded",loadalltodo);
    secondcardbody.addEventListener("click",deletetodo);
    filter.addEventListener("keyup",filterTodos);
    clearall.addEventListener("click",clearalltodos)
}

//todo elave etmek
function addtodo(e){
    const newtodo = todoinput.value.trim();
    if(newtodo === ""){
        showalert("danger","Bir Todo elave edin");
     }
     else{
         addtodotoUI(newtodo);
         addtodotoStorage(newtodo);
     showalert("success","Todo ugurla elave edildi")
 
    }
 
    e.preventDefault();
 }
 function addtodotoUI(newtodo){
    const listitem = document.createElement("li");
    listitem.className = "list-group-item d-flex justify-content-between"
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class='fa-solid fa-trash-can'></i>"
    listitem.appendChild(document.createTextNode(newtodo));
    listitem.appendChild(link)
    list.appendChild(listitem)
    todoinput.value = ""
}
//todo silmek

function deletetodo(e){
    if(e.target.className === "fa-solid fa-trash-can"){
       e.target.parentElement.parentElement.remove();
       deletetodotoStorage(e.target.parentElement.parentElement.textContent);
       showalert("success","Todo ugurla silindi");
    }
}
function deletetodotoStorage(deletetodo){
   let todos = gettodoStorage();
   todos.forEach(function(todo,index){
       if(todo === deletetodo){
           todos.splice(index,1);
       }
   })
   localStorage.setItem("todos",JSON.stringify(todos))
}
function clearalltodos(e){
      if(confirm("Butun todolari silmek isteyirsiniz?")){
         while(list.firstElementChild != null){
            list.removeChild(list.firstElementChild)
         }
         localStorage.removeItem("todos")
      }
}
function filterTodos(e){
       const filtervalue = e.target.value.toLowerCase();
       const listitems = document.querySelectorAll(".list-group-item")
       listitems.forEach(function(listitem){
          const text = listitem.textContent.toLowerCase();
          if(text.indexOf(filtervalue) === -1){
            listitem.setAttribute("style","display:none !important")
        }
        else{
            listitem.setAttribute("style","display:block !important")
        }
       })
}

//Storage
function addtodotoStorage(newtodo){
    let todos = gettodoStorage();
    todos.push(newtodo);
    localStorage.setItem("todos",JSON.stringify(todos))
}
function gettodoStorage(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}
function loadalltodo(){
    let todos = gettodoStorage();
    todos.forEach(function(todo){
        addtodotoUI(todo);
    });
}


//Bildiris
function showalert(type,message){
  const alert= document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstcardbody.appendChild(alert)
   
  setTimeout(function(){
    alert.remove()
  },1000)

}
