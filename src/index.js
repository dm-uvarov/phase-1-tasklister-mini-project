document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  form1=  document.getElementById("create-task-form");
  form1.addEventListener('submit', (e) => {
    e.preventDefault();
    let listItem = document.createElement('li');
    let btnRemove = document.createElement('button');
    btnRemove.textContent = "|X|";
    btnRemove.addEventListener('click', toDeleteTask);
    
    listItem.textContent = document.getElementById("new-task-description").value;
    listItem.appendChild(btnRemove);
    document.getElementById("tasks").appendChild(listItem);
    form1.reset();
  })

  function toDeleteTask(e){
    e.target.parentNode.remove();
  }



});

/*
document.addEventListener('DOMcontentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      //console.log(e.target.new-task-description.value);
  })

})

// function handleToDo(s_create_task){
//     let listItem = document.createElement('li')
//     listItem.textContent= s_create_task
//     document.querySelector("#tasks").appendChild(listItem)

  
// }
*/
