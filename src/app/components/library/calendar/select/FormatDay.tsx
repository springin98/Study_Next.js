import { formatDayType } from "../Body";

export default function FormatDay({ value, setValue }: FormatProps) {
  return (
    <>
      <h3>FormatDay</h3>
      <select
        value={value}
        onChange={(e) => {
          if (
            e.target.value === "YYYY-MM-DD" ||
            e.target.value === "DD" ||
            e.target.value === "D" ||
            e.target.value === "D일"
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

const format = ["YYYY-MM-DD", "DD", "D", "D일"];

interface FormatProps {
  value: formatDayType;
  setValue: (value: formatDayType) => void;
}
