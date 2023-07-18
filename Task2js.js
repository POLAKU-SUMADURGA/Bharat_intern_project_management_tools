 
    // JavaScript code
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value;
      
      if (taskText.trim() !== '') {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        
        // Event listener for delete button click
        deleteButton.addEventListener('click', () => {
          li.remove();
        });
        
        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(deleteButton);
        
        taskList.appendChild(li);
        
        taskInput.value = '';
      }
    }
    
    // Event listener for add task button click
    addTaskButton.addEventListener('click', addTask);
    
    // Event listener for enter key press on task input
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
 