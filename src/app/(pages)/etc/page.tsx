import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>ETC</h1>
      <ul>
        <li>
          <Link href={`/etc/gitCommand`}>git 명령어 정리</Link>
        </li>
        <br />
        <li>
          <Link href={`/etc/kindsOfServer`}>서버 종류 정리</Link>
        </li>
        <br />
      </ul>
    </>
  );
}
