import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Main</h1>
      <div>
        <Link href={`/guide`}>Guide</Link>
        <br />
        <Link href={`/next`}>Next Skill</Link>
        <br />
        <Link href={`/library`}>Library</Link>
      </div>
    </div>
  );
}
