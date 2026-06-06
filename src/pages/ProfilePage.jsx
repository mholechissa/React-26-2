import { useAuth } from "../contexts/AuthContext";

function ProfilePage() {
  const { email, isAuthenticated } = useAuth();

  return (
    <div>
      <h2>Profile</h2>

      <p>
        <strong>Email:</strong> {email || "Demo User"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {isAuthenticated ? "Authenticated" : "Not Authenticated"}
      </p>

      <h3>Todo Statistics</h3>

      <ul>
        <li>Total Todos: 0</li>
        <li>Completed Todos: 0</li>
        <li>Active Todos: 0</li>
      </ul>
    </div>
  );
}

export default ProfilePage;