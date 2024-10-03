const formTodo=document.querySelector('.form-todo')

const input=document.querySelector('.input')

const todoList=document.querySelector('.todo-list')


formTodo.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const newli=document.createElement('li')
    newli.innerHTML=
    `
     <span class="text">${input.value}</span>
            <div class="todo-buttons">
              <button class="todo-btn remove">Remove</button>
            </div>
    `
    if(input.value==""){
        alert("Please Enter the todo You want to add")
    }
    else{
        todoList.append(newli)
    }
    
    input.value=""
})


todoList.addEventListener('click',(e)=>
{
    removeItem=e.target.parentNode.parentNode.parentNode.firstElementChild

    removeItem.remove()
})
