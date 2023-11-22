export default function Folders() {
  return (
    <div>
      <h2>폴더 구조</h2>
      <ul>
        <li>pages 폴더에 맞춰 components, styles 폴더를 생성한다.</li>
        <li>
          각 page.tsx 마다 Body.tsx 이 존재하므로, components의 내부 폴더
          최상위에는 Body.tsx 이 존재한다.
        </li>
      </ul>
    </div>
  );
}
