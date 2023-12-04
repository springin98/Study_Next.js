import { produce } from "immer";
import { stateType } from "../Body";

export default function CalendarType({ state, setState }: CalendarTypeProps) {
  return (
    <>
      <h3>Calendar Type</h3>
      <select
        value={state.calendarType}
        onChange={(e) => {
          setState((preState) =>
            produce(preState, (draft) => {
              if (
                e.target.value === "gregory" ||
                e.target.value === "hebrew" ||
                e.target.value === "islamic" ||
                e.target.value === "iso8601"
              )
                draft.calendarType = e.target.value;
            })
          );
        }}
      >
        {types.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
    </>
  );
}

interface CalendarTypeProps {
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
}

const types = ["gregory", "hebrew", "islamic", "iso8601"];
