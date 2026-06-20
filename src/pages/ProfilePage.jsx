import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

function ProfilePage() {
  const { email, isAuthenticated } = useAuth();

  const [todoStats, setTodoStats] = useState({
    total: 0,
    completed: 0,
    active: 0,
  });

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const total = savedTodos.length;
    const completed = savedTodos.filter((todo) => todo.isCompleted).length;
    const active = total - completed;

    setTodoStats({ total, completed, active });
  }, []);

  const completionPercentage =
    todoStats.total === 0
      ? 0
      : Math.round((todoStats.completed / todoStats.total) * 100);

  return (
    <section>
      <h2>Profile</h2>

      <p>
        <strong>Email:</strong> {email || "Demo User"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </p>

      <h3>Todo Statistics</h3>

      <div className="stats-card">
        <ul>
          <li>Total Todos: {todoStats.total}</li>
          <li>Completed Todos: {todoStats.completed}</li>
          <li>Active Todos: {todoStats.active}</li>
        </ul>

        <p>
          <strong>Completion:</strong> {completionPercentage}%
        </p>
      </div>
    </section>
  );
}

export default ProfilePage;