import Link from "next/link";

export default function Body() {
  return (
    <div>
      <h1>Next Skill</h1>
      <ul>
        <li>
          <Link href={`/next/router`}>Router</Link>
          <ul>
            <li>
              {/* <Link href={`/next/router/utils/chanfeFormat`}>changeFormat</Link> */}
            </li>
          </ul>
        </li>
        <li>
          <Link href={`/next/utils`}>Utils</Link>
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
          </ul>
        </li>
      </ul>
    </div>
  );
}
