import myRead from "@/myRead";
import { use } from "react";

async function fetchMyData(name: string | void) {
  if (!name) {
    return null;
  }
  const result = await myRead(name);
  return result;
}

export default async function DynamicPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const result = use(fetchMyData(searchParams.name as string | undefined));

  return (
    <div>
      <h1>Dynamic Page</h1>
      <form action="/dynamic" method="get">
        <input type="text" name="name" defaultValue={searchParams.name} />
        <button type="submit">Submit</button>
      </form>
      <p>rendered time:{new Date().toLocaleString()}</p>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
