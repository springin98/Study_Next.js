import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const jotaiImmerAtom = atomWithImmer({
  a: "",
  b: "",
  c: "",
});

interface jotaiImmerType {
  a: string;
  b: number;
  c: Array<string>;
}

export const jotaiAtom = atom<string>("");
