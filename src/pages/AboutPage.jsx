function AboutPage() {
  return (
    <div>
      <h2>About This Todo App</h2>

      <p>
        This app helps users create, edit, complete, and filter todos.
      </p>

      <h3>Features</h3>
      <ul>
        <li>Multi-page navigation</li>
        <li>Protected todo and profile routes</li>
        <li>Login and logout flow</li>
        <li>Todo filtering by URL status parameters</li>
        <li>404 page for unknown routes</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Vite</li>
      </ul>
    </div>
  );
}

export default AboutPage;