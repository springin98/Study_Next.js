import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Main</h1>
      <ul>
        <li>
          <Link href={`/guide`}>Guide</Link>
        </li>
        <li>
          <Link href={`/next`}>Next</Link>
        </li>
        <li>
          <Link href={`/utils`}>Utils</Link>
        </li>
        <li>
          <Link href={`/ui`}>UI</Link>
        </li>
        <li>
          <Link href={`/library`}>Library</Link>
        </li>
        <li>
          <Link href={`/cs`}>CS Info</Link>
        </li>
        <li>
          <Link href={`/component`}>Component</Link>
        </li>
        <li>
          <Link href={`/etc`}>ETC</Link>
        </li>
      </ul>
    </div>
  );
}
