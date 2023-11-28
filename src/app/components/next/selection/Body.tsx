import MultipleSelection from "./MultipleSelection";
import SingleSelection from "./SingleSelection";

export default function Body() {
  return (
    <>
      <h1>단일 선택</h1>
      <ul>
        <li>Default : Option1</li>
        <li>전체 : X</li>
      </ul>
      <SingleSelection />
      <br />

      <h1>다중 선택</h1>
      <ul>
        <li>Default : Option1</li>
        <li>전체 : O - 옵션 전부 선택하면 자동으로 [전체] 선택</li>
      </ul>
      <MultipleSelection />
    </>
  );
}
