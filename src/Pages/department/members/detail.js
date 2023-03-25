import { useParams } from "react-router-dom";
import "./details.css";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

export function MemberDetail() {
  let { userId } = useParams();

  // Find the user by ID
  const user = users.find((u) => u.id === Number(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <section>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </section>
  );
}
