
document.querySelector('#input').onkeypress = function(){
    document.querySelector('#error').innerHTML ='';
}
document.querySelector('#button').onclick = function () {
    if(document.querySelector('#input').value.length == 0){
        document.querySelector('#error').innerHTML ="Please add atleast one character";
    }else{
    let textInputValue = document.querySelector('#input').value;
    document.querySelector('#tasks').innerHTML += `
  
         <div class="task">
              <span id="taskname"> ${textInputValue} </span>
              <button class="delete">
              <i class="fa fa-trash" style="font-size:30px;"></i>
              </button>
          </div>
          `;

    var current_tasks = document.querySelectorAll('.delete');

    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
    }


    var tasks = document.querySelectorAll('.task');


    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle('completed');
        }
    }

    document.querySelector('#input').value = "";
}
}
