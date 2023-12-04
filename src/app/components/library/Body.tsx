import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Library</h1>
      <ul>
        <li>
          <Link href={`/library/calendar`}>Calendar</Link>
        </li>
      </ul>
    </div>
  );
}
