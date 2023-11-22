export default function Naming() {
  return (
    <div>
      <h2>Naming Rules</h2>
      <ul>
        <li>Pascal case : 컴포넌트명</li>
        <li>Camel case : 변수명, 폴더명, 함수명</li>
        <li>Snake case : .ts, .tsx 파일을 제외한 파일명 (이미지 등)</li>
        <li>네이밍에서 알 수 있어야 하는 정보</li>
        <ul>
          <li>변수명 : 자료형, 단수/복수 </li>
          <ul>
            <li>boolean : is</li>
            <li>복수 : ~s</li>
          </ul>
          <li>함수명 : 용도</li>
        </ul>
        <li>
          Props 변수명 : 부모 컴포넌트와 자식 컴포넌트는 동일한 변수명을
          사용한다.
        </li>
      </ul>
    </div>
  );
}
