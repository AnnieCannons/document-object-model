// Questions

// 1. How many child nodes does the body element have in this document?
// ⭐️ 4 child nodes in the HTML

// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?
// ⭐️ parent + grand child

// 3. What is the relationship between the div with the class of image-gallery and the html element?
// ⭐️ parent + great grand child

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
//⭐️ 5 variables




// 6. How many function calls do you see?
// ⭐️ 3 function calls





// 7. List the parameters that you see.
// ⭐️ document.addEventListener('DOMContentLoaded', function ()
// ⭐️ addButton.addEventListener('click', function ()





// What do you see? What can you learn from the above code?
// ⭐️the code listens for a click event on the 'addButton', then retrieves the task from the input field, 
// then creates a new list item with the task from the user, which then appends the task item to the task list, 
// and at last, clears the input field after adding a new task to the list