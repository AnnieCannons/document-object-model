// Questions

// 1. How many child nodes does the body element have in this document?
//a. header
//b. div
//c.  div
//d. script

// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?
// <div class="todo-section"> parent
// <li>Reading</li> grandchild

// 3. What is the relationship between the div with the class of image-gallery and the html element?
// html - parent
//<div class="image-gallery"> - great grandchild

// 4. Uncomment the following code:

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = newTaskInput.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            taskItem.addEventListener('click', function () {
                taskItem.classList.toggle('completed');
            });

            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    });
});

// Connect this file to the HTML file and open the HTML file in the browser? We will learn much more about event listeners soon!

// 5. How many variables are declared?
// const addButton 
// const newTaskInput
// const taskList
// const taskText


// 6. How many function calls do you see?
// 3 function calls

// 7. List the parameters that you see.


// What do you see? 
// What can you learn from the above code?