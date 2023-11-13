"use client";
import { useFormState } from "react-dom";
import { Result } from "./Result";
import { action } from "./action";

export function MyForm() {
  const [state, formAction] = useFormState(action, null);
  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <input type="submit" />
      <Result />
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
