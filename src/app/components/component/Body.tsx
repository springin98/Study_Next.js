import Link from "next/link";

export default function Body() {
  return (
    <>
      <h1>Component</h1>
      <ul>
        <li>
          <Link href={`/component/input`}>input</Link>
        </li>
        <li>
          <Link href={`/component/pagenation`}>pagenation</Link>
        </li>
        <li>
          <Link href={`/component/infiniteScroll`}>infiniteScroll</Link>
        </li>
        <li>
          <Link href={`/component/modal`}>modal</Link>
        </li>
      </ul>
    </>
  );
}
