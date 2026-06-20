import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

  const [projects, setProjects] =
  useState([]);

  useEffect(() => {

    api.get("/projects", {
      headers: {
        authorization:
        localStorage.getItem("token")
      }
    })
    .then(res => setProjects(res.data));

  }, []);

  return (
    <div>

      <h2>Projects</h2>

      {projects.map(project => (

        <div key={project._id}>
          {project.name}
        </div>

      ))}

    </div>
  );
}

export default Dashboard;