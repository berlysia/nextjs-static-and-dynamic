export default async function myRead(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    name,
    timestamp: new Date().toLocaleString(),
  };
}