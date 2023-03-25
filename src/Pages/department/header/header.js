import "./header.css";

export default function DepartmentHeader({ message }) {
  return (
    <header id="department-header">
      <span>
        <h3>Good morning</h3>
        <p>{message}</p>
      </span>

      <form></form>
    </header>
  );
}
