// Questions

// 1. How many child nodes does the body element have in this document?

// 1. 3 child nodes


// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?

// 2. the list element is a grandchild of the div.


// 3. What is the relationship between the div with the class of image-gallery and the html element?

// 3. the div element is a great-grandchild of the html element.


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

// 5. Five variables


// 6. How many function calls do you see?

// 6. 3 function calls


// 7. List the parameters that you see.

// 7. 12


// What do you see? What can you learn from the above code?

// The page is now interactive and you can add to do items to the list in real time