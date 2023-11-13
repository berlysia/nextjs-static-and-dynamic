import { MyForm } from "./MyForm";

export default function ServerActionPage() {
  return (
    <div>
      <h1>Server Action Page</h1>
      <p>rendered time:{new Date().toLocaleString()}</p>
      <MyForm />
    </div>
  );
}
