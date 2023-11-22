export default function Pages() {
  return (
    <div>
      <h2>page.tsx</h2>
      <ul>
        <li>페이지에 입장할 때, 실행해야 하는 함수와 컴포넌트만 존재한다.</li>
        <li>해당 페이지에 사용하는 전역 변수를 초기화한다.</li>
        <li>API 호출 함수를 사용한다.</li>
        <li>
          Body.tsx 컴포넌트를 사용한다. (이 외의 컴포넌트는 Body 컴포넌트 안에
          존재한다.)
        </li>
      </ul>
    </div>
  );
}
