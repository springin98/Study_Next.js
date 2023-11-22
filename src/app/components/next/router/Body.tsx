"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Body() {
  const router = useRouter();

  return (
    <div>
      <h1>Router</h1>
      <ul>
        <li>
          <Link href={`/`}>Link로 이동 : 새로고침 X</Link>
        </li>
        <li>
          <a href={`/`}>a 태그로 이동 : 새로고침 O</a>
        </li>
        <li onClick={() => router.push(`/`)}>
          router.push 로 이동 : 새로고침 X
        </li>
        <li onClick={() => router.back()}>router.back 로 이동 : 새로고침 X</li>
        <li
          onClick={() => {
            window.location.href = `/`;
          }}
        >
          window.location.href 으로 이동 : 새로고침 O
        </li>
      </ul>
    </div>
  );
}
