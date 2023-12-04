import { produce } from "immer";
import { stateType } from "../Body";

export default function Locale({ state, setState }: SelectProps) {
  return (
    <>
      <h3>Calendar Requirement</h3>
      <select
        value={state.locale}
        onChange={(e) => {
          setState((preState) =>
            produce(preState, (draft) => {
              draft.locale = e.target.value;
            })
          );
        }}
        size={5}
      >
        {locale.map((locale, index) => (
          <option key={index}>{locale}</option>
        ))}
      </select>
    </>
  );
}

interface SelectProps {
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
}

const locale = [
  "af",
  "am",
  "ar",
  "arn",
  "as",
  "az",
  "ba",
  "be",
  "bg",
  "bn",
  "bo",
  "br",
  "bs",
  "ca",
  "co",
  "cs",
  "cy",
  "da",
  "de",
  "dsb",
  "dv",
  "el",
  "en",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fil",
  "fo",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "gsw",
  "gu",
  "ha",
  "he",
  "hi",
  "hr",
  "hsb",
  "hu",
  "hy",
  "id",
  "ig",
  "ii",
  "is",
  "it",
  "iu",
  "ja",
  "ka",
  "kk",
  "kl",
  "km",
  "kn",
  "ko",
  "kok",
  "ckb",
  "ky",
  "lb",
  "lo",
  "lt",
  "lv",
  "mi",
  "mk",
  "ml",
  "mn",
  "moh",
  "mr",
  "ms",
  "mt",
  "my",
  "nb",
  "ne",
  "nl",
  "nn",
  "no",
  "st",
  "oc",
  "or",
  "pa",
  "pl",
  "prs",
  "ps",
  "pt",
  "quc",
  "qu",
  "rm",
  "ro",
  "ru",
  "rw",
  "sa",
  "sah",
  "se",
  "si",
  "sk",
  "sl",
  "sma",
  "smj",
  "smn",
  "sms",
  "sq",
  "sr",
  "sv",
  "sw",
  "syc",
  "ta",
  "te",
  "tg",
  "th",
  "tk",
  "tn",
  "tr",
  "tt",
  "tzm",
  "ug",
  "uk",
  "ur",
  "uz",
  "vi",
  "wo",
  "xh",
  "yo",
  "zh",
  "zu",
];
