import { formatMonthType } from "../Body";

export default function FormatMonth({ value, setValue }: FormatProps) {
  return (
    <>
      <h3>FormatMonth</h3>
      <select
        value={value}
        onChange={(e) => {
          if (
            e.target.value === "MM" ||
            e.target.value === "M" ||
            e.target.value === "MM월" ||
            e.target.value === "M월"
          )
            setValue(e.target.value);
        }}
      >
        {format.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
    </>
  );
}

const format = ["MM", "M", "MM월", "M월"];

interface FormatProps {
  value: formatMonthType;
  setValue: (value: formatMonthType) => void;
}
