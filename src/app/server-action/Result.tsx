"use client";
import { useFormStatus } from "react-dom";

export function Result() {
  const status = useFormStatus();
  return (
    <div>
      status: <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}
