export default function Body() {
  return (
    <>
      <h1>협업 명령어</h1>
      <h4>새로운 저장소 생성</h4>
      <p> git init</p>
      <br />
      <h4>저장소 복제 / 다운로드</h4>
      <p>git clone URL</p>
      <br />
      <h4>커밋에 전체 파일 추가</h4>
      <p>git add .</p>
      <br />
      <h4>커밋 생성</h4>
      <p>git commit -m "커밋 메시지"</p>
      <br />
      <h4>브랜치 목록</h4>
      <p>git branch</p>
      <br />
      <h4>새 브랜치 생성</h4>
      <p>git branch 브랜치이름</p>
      <br />
      <h4>브랜치 생성 & 이동</h4>
      <p>git checkout -b</p>
      {/* ===== */}
      <h1>VSCode에서 유용한 명령어</h1>
      <h4>충돌 수정 화면 표출</h4>
      <p>git config pull.rebase false</p>
      <br />
      <h4>빗버킷 업데이트 후, 브랜치 연동</h4>
      <p>git remote update</p>
      <br />
      <h4>빗버킷 브랜치 연동</h4>
      <p>git checkout 브랜치 이름</p>
      <br />
      <h4>포트 확인</h4>
      <p>lsof -PiTCP -sTCP:LISTEN</p>
      <br />
      <h4>포트 종료</h4>
      <p>kill -15 pit번호</p>
      <br />
      <h4>대소문자 파일명</h4>
      <p>git config core.ignorecase false</p>
      <br />
      <h4>캐시 삭제</h4>
      <p>git rm -r —cached . </p>
      <br />
    </>
  );
}
