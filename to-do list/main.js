const taskInput = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const listContainer = document.getElementById('list-container');

button.addEventListener('click', ()=>{
    if(taskInput.value === ''){
        alert('Please enter a task.');
    }else{
        let li =document.createElement('li');
        li.innerHTML = taskInput.value; 
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = '';
    savedata();
})

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");   
        savedata();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function getdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getdata();