const TASKBUTTON = document.getElementById('add-task');
let taskList = document.getElementById('tasks');

TASKBUTTON.addEventListener('click', function(){

    taskListAtual = taskList.innerHTML;

    let task = "<div><input type='checkbox' onchange='concluiTarefa(this);'>"+document.getElementById('task-input').value+"</div>";

    taskList.innerHTML = taskListAtual + task;

    document.getElementById('task-input').value = "";
});

function concluiTarefa(taskCheckbox) {

    console.log(taskCheckbox.outerHTML)

    if(taskCheckbox.checked==true){
        task[i].innerHTML = "<del>"+task[i].innerHTML+"</del>";

        taskCheckbox.checked = true;
    }else{
        task[i].innerHTML.replace('<del>', '').replace('</del>', '');
    }

}