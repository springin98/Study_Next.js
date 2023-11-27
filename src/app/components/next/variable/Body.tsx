"use client";

import { jotaiAtom, jotaiImmerAtom } from "@/store/jotai";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export default function Body() {
  // const jotai = useAtomValue(jotaiAtom);
  // const setJotai = useSetAtom(jotaiAtom);
  const [jotai, setJotai] = useAtom(jotaiAtom);
  const [jotaiImmer, setJotaiImmer] = useAtom(jotaiImmerAtom);

  return (
    <>
      <h1>Jotai</h1>
      <>
        <h3>Jotai</h3>
        <label>Jotai :&nbsp;</label>
        <input
          type="text"
          value={jotai}
          onChange={(e) => setJotai(e.target.value)}
        />
        <p>Jotai : {jotai}</p>
      </>
      <>
        <h3>Jotai Immer</h3>
        <label>a :&nbsp;</label>
        <input
          type="text"
          value={jotaiImmer.a}
          onChange={(e) => {
            setJotaiImmer((draft) => {
              draft.a = e.target.value;
            });
          }}
        />
        <br />
        <label>b :&nbsp;</label>
        <input
          type="text"
          value={jotaiImmer.b}
          onChange={(e) => {
            setJotaiImmer((draft) => {
              draft.b = e.target.value;
            });
          }}
        />
        <br />
        <label>c :&nbsp;</label>
        <input
          type="text"
          value={jotaiImmer.c}
          onChange={(e) => {
            setJotaiImmer((draft) => {
              draft.c = e.target.value;
            });
          }}
        />
        <br />
        <p>a : {jotaiImmer.a}</p>
        <p>b : {jotaiImmer.b}</p>
        <p>c : {jotaiImmer.c}</p>
      </>
    </>
  );
}
