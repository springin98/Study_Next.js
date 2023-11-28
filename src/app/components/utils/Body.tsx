import Link from "next/link";

export default function Body() {
  return (
    <>
      <h3>Utils</h3>
      <ul>
        <li>
          <Link href={`/utils/changeDateFormat`}>changeDateFormat</Link>
        </li>
        <li>
          <Link href={`/utils/changeContentFormat`}>changeContentFormat</Link>
        </li>
        <li>
          <Link href={`/utils/scroll`}>scroll</Link>
        </li>
        <li>
          <Link href={`/utils/cookies`}>cookies</Link>
        </li>
      </ul>
    </>
  );
}
