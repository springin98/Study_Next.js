export default function Body() {
  return (
    <>
      <h1>개발 서버 dev</h1>
      <ul>
        <li>개발하고 테스트하는 데 사용하는 환경</li>
        <li>
          개발 서버에서 작업한 결과물은 주로 품질 테스트와 검증을 거친 후 실제
          운영 환경으로 이관
        </li>
      </ul>
      <h1>임시 preview</h1>
      <ul>
        <li>
          실제 운영 환경과 비슷한 환경에서 애플리케이션 또는 웹 사이트의 새로운
          기능 또는 업데이트를 사전에 테스트하기 위해 사용
        </li>
        <li>
          사용자가 새로운 변경 사항을 미리 경험하고 피드백을 제공할 수 있도록
          하는 데 사용
        </li>
        <li>
          실제 운영 환경에 가까우며 실제 사용자에게 미치는 영향을 최소화하기
          위해 사용
        </li>
      </ul>
      <h1>임시 운영</h1>
      <ul>
        <li>
          새로운 버전 또는 업데이트를 일부 사용자 또는 일부 지역에서 제한된
          규모로 배포하는 데 사용
        </li>
        <li>
          모든 사용자에게 즉시 적용되는 대신 일부 사용자에게만 영향을 미침
        </li>
      </ul>
    </>
  );
}
