const tasks = [
    { id: 1, text: "Mai tôi sẽ đi cắt tóc", level: "easy", completed: false, important: false },
    { id: 2, text: "Mai tôi sẽ đi chơi", level: "medium", completed: false, important: true },
    { id: 3, text: "Mai tôi sẽ đi nhậu", level: "hard", completed: true, important: false }
  ];
  
  function renderTasks(filter = "all") {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === "important") return task.important;
      if (filter === "completed") return task.completed;
      return true;
    });
  
    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `${task.level} ${task.completed ? "completed" : ""} ${task.important ? "important" : ""}`;
      li.innerText = task.text;
  
      // Sự kiện click: đánh dấu hoàn thành
      li.onclick = () => {
        task.completed = !task.completed;
        renderTasks(filter);
      };
  
      // Sự kiện double click: đánh dấu quan trọng
      li.ondblclick = () => {
        task.important = !task.important;
        renderTasks(filter);
      };
  
      taskList.appendChild(li);
    });
  }
  
  function filterTasks(filter) {
    renderTasks(filter);
  }
  
  // Khởi tạo app
  renderTasks();
  