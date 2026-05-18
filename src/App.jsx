import { useState } from "react";
import "./App.css";

import Header from "./shared/Header";
import Logon from "./features/Todos/Logon"
import TodosPage from "./features/Todos/TodosPage";

function App() {
  const [Email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <>
      <Header />

      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
    </>
  );
}

export default App;