document.addEventListener("DOMContentLoaded", function()
{
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const deleteAllTask = document.getElementById("deleteAll");
    const deleteNechet = document.getElementById("deleteNechet")
    
    addTask.addEventListener("click", function()
    {
        const textTask = taskInput.value.trim();
        if (textTask !== ""){
            const elementList = document.createElement("li");
            elementList.innerHTML = `
            <label><input type="checkbox" class="checked"></label>
            <span>${textTask}</span>
            <span class="delete">X</span>
            `;
            elementList.querySelector(".delete").addEventListener("click", function()
            {
                taskList.removeChild(elementList);
            })
            taskList.appendChild(elementList);
            taskInput = "";
        }
    })
    
    deleteAllTask.addEventListener("click", function()
    {
        taskList.innerHTML = ""
    })
    const filterSelect = document.querySelector("select");
    filterSelect.addEventListener("change", function()
{
    const selectedClass = filterSelect.options[filterSelect.selectedIndex].className;
    const allTasks = taskList.querySelectorAll("li");
    allTasks.forEach(task => {
        if (selectedClass === "complete" && !task.querySelector(".checked").checked) {
            task.style.display = "none";
        } else if (selectedClass === "uncomplete" && task.querySelector(".checked").checked) {
            task.style.display = "none";
        } else {
            task.style.display = "flex";
        }
    });
});
deleteNechet.addEventListener("click", function(){
    const allTasks = taskList.querySelectorAll("li");
    allTasks.forEach((task, index) =>{
        if (index % 2 === 0){
            taskList.removeChild(task);
        }
    }
        )
})
})
