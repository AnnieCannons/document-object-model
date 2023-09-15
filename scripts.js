// Questions

// 1. How many child nodes does the body element have in this document?

//4: header, div, div, script

// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?

//grandchild Div parent, ul, child, li grandchild

// 3. What is the relationship between the div with the class of image-gallery and the html element?

//great-grandchild html parent, body child, div grandchild, div great-grandchild


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

// five: addButton, newTaskInput, taskLIst, taskText, taskItem

// 6. How many function calls do you see?

// Three: line 18, 23 and 30

// 7. List the parameters that you see.

// Two: DOMContentLoaded and click 

// What do you see? What can you learn from the above code?

// The above code is saying: Once the DOM content has loaded (the content it is referring to is document) - create these variables (the new variables represent specific elements in the HTML file). Once the element addButton is clicked, create this variable (the new variables represent specific element in the HTML file). If the input value is not blank, store the value as a new li item. When the button is clicked, add that value to the list and reset the input box. 


