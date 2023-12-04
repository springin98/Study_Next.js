import { produce } from "immer";
import { stateType } from "../Body";

export default function Label({ state, setState }: LabelProps) {
  const onChange = (text: string, num: Number) => {
    let label: string | null = text;
    if (label === "") label = null;
    setState((preState) =>
      produce(preState, (draft) => {
        switch (num) {
          case 1:
            draft.prev2Label = label;
            break;
          default:
            draft.next2Label = label;
            break;
        }
      })
    );
  };

  return (
    <>
      <>
        <h3>Prev2Label</h3>
        <input
          type="text"
          placeholder="<<"
          onChange={(e) => onChange(e.target.value, 1)}
        />
      </>
      <>
        <h3>Next2Label</h3>
        <input
          type="text"
          placeholder=">>"
          onChange={(e) => onChange(e.target.value, 2)}
        />
      </>
    </>
  );
}

interface LabelProps {
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
}
