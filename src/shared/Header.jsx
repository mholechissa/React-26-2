import Navigation from "./Navigation.jsx";
import Logoff from "./Logoff.jsx";

function Header() {
  return (
    <header>
      <h1>Todo List</h1>

      <Navigation />

      <Logoff />
    </header>
  );
}

export default Header;