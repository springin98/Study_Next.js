export default function Jotai() {
  return (
    <div>
      <h2>Jotai</h2>
      <ul>
        <li>
          {
            "atom 정의 시, 변수명 뒤에 Atom 을 붙인다. (nameAtom = atom<null>(null))"
          }
        </li>
        <li>useAtomValue : 값 가져올 때</li>
        <li>useSetAtom : 값 재할당할 때</li>
        <li>useAtom : useAtom + useSetAtom</li>
      </ul>
    </div>
  );
}
