import { styled } from "styled-components";

import { Detail } from "node_modules/react-calendar/dist/esm/shared/types";

export default function MinMaxDetail({
  text,
  value,
  setValue,
}: MinDetailProps) {
  return (
    <>
      <H3>{text}</H3>
      <select
        value={value}
        onChange={(e) => {
          if (
            e.target.value === "month" ||
            e.target.value === "year" ||
            e.target.value === "decade" ||
            e.target.value === "century"
          ) {
            setValue(e.target.value);
          }
        }}
      >
        {minDetail.map((minDetail, index) => (
          <option key={index}>{minDetail}</option>
        ))}
      </select>
    </>
  );
}

const minDetail = ["month", "year", "decade", "century"];

const H3 = styled.h3`
  margin: 0px;
`;

interface MinDetailProps {
  text: string;
  value: Detail;
  setValue: (value: Detail) => void;
}
