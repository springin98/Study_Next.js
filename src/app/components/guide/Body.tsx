import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Guide</h1>
      <Link href={`/guide/convention`}>Code Convention</Link>
      <br />
      <Link href={`/guide/toDo`}>To Do</Link>
    </div>
  );
}
