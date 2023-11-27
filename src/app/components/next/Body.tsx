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
          <p>Utils</p>
          <ul>
            <li>
              <Link href={`/next/utils/changeDateFormat`}>
                changeDateFormat
              </Link>
            </li>
            <li>
              <Link href={`/next/utils/changeContentFormat`}>
                changeContentFormat
              </Link>
            </li>
            <li>
              <Link href={`/next/utils/scroll`}>scroll</Link>
            </li>
            <li>
              <Link href={`/next/utils/cookies`}>cookies</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
