export default function Files() {
  return (
    <div>
      <h2>파일 구조</h2>
      <div>
        <h3>import 순서</h3>
        <p>* 절대 경로를 사용한다.</p>
        <ul>
          <li>{`"use client"`}</li>
          <li>React</li>
          <li>Next</li>
          <li>Labrary</li>
          <br />
          <li>CSS</li>
          <li>image file</li>
          <br />
          <li>types</li>
          <li>store</li>
          <li>utils</li>
          <br />
          <li>components</li>
        </ul>
      </div>
      <div>
        <h3>정의 순서</h3>
        <p>{`* 범위가 큰 순서대로 정의한다.`}</p>
        <ul>
          <li>상수&변수</li>
          <ul>
            <li>Next.js 내부 함수를 정의하는 상수</li>
            <li>전역 상수</li>
            <li>전역 변수</li>
            <li>useState 변수</li>
            <li>const</li>
            <li>let</li>
          </ul>
          <li>함수</li>
        </ul>
      </div>
    </div>
  );
}
