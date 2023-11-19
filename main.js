const addTaskBtn = document.querySelector(".add_task-btn");
const inputBox = document.querySelector(".toDO_tasks-input");
const taskBox = document.getElementById("inner_tasks-block");




addTaskBtn.addEventListener("click" , () => {
    if(inputBox.value === "") {
        alert("Please white something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
});



taskBox.addEventListener( "click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});


document.addEventListener( "keydown", (e) => {
    if(e.key === "Enter") {
        if(inputBox.value === "") {
            alert("Please white something!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            taskBox.appendChild(li);
    
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        
        inputBox.value = "";
    }
})




