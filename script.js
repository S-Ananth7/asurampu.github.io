function loadTask(taskId) {
    const works = {
        "task1": { "title": "Project 1", "url": "works/task1/index.html" },
        "task2": { "title": "Project 2", "url": "works/task2/index.html" },
        "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    };

    
    if (works[taskId]) {
        document.getElementById("workFrame").src = works[taskId].url;
        document.getElementById("workFrame").title = works[taskId].title; 
    } else {
        alert("Task not found!");
        document.getElementById("workFrame").src = ""; 
        document.getElementById("workFrame").title = "Select a project";
    }
}