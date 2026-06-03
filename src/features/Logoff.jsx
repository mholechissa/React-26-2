import { useAuth } from "../contexts/AuthContext";

function Logoff() {
  const { logout } = useAuth();

  async function handleLogoff() {
    await logout();
  }

  return (
    <button type="button" onClick={handleLogoff}>
      Log Off
    </button>
  );
}

export default Logoff;