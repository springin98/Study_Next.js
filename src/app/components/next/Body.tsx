import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Next Skill</h1>
      <ul>
        <li>
          <Link href={`/next/router`}>Router</Link>
        </li>
      </ul>
    </div>
  );
}
