import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Next Skill</h1>
      <ul>
        <li>
          <Link href={`/next/router`}>Router</Link>
        </li>
        <li>
          <Link href={`/next/variable`}>Variable</Link>
        </li>
        <li>
          <Link href={`/next/selection`}>selection</Link>
        </li>
        <li>
          <Link href={`/next/search`}>search</Link>
        </li>
        <li>
          <Link href={`/next/api`}>API</Link>
        </li>
      </ul>
    </div>
  );
}
