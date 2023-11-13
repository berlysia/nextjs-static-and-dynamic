"use server";
import myRead from "@/myRead";

export async function action(
  prevState: null | Awaited<ReturnType<typeof myRead>>,
  formData: FormData
) {
  const name = formData.get("name");
  if (!name) {
    return null;
  }

  const result = await myRead(name as string);
  return result;
}
