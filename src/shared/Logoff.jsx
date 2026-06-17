import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";

function Logoff() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogoff() {
    await logout();
    navigate("/login");
  }

  return (
    <button type="button" onClick={handleLogoff}>
      Log Out
    </button>
  );
}

export default Logoff;