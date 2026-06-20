import { useEffect, useState } from "react";
import api from "../services/api";

function ProjectBoard() {

  const [tasks, setTasks] =
  useState([]);

  useEffect(() => {

    api.get("/tasks")
    .then(res => setTasks(res.data));

  }, []);

  return (

    <div>

      <h2>Todo</h2>

      {tasks
      .filter(t => t.status === "Todo")
      .map(task => (

        <div key={task._id}>
          {task.title}
        </div>

      ))}

    </div>
  );
}

export default ProjectBoard;