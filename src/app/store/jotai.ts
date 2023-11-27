import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

export const jotaiImmerAtom = atomWithImmer<jotaiImmerType>({
  a: "",
  b: "",
  c: "",
});

interface jotaiImmerType {
  a: string;
  b: string;
  c: string;
}

export const jotaiAtom = atom<string>("");
