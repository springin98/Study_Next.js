import Calendar from "react-calendar";
import { styled } from "styled-components";

export default function MinMaxDate({ text, value, setValue }: MinMaxDateType) {
  return (
    <Div>
      <h3>{text}</h3>
      <Calendar
        locale="ko"
        value={value}
        onChange={(e) => {
          if (!(e instanceof Date)) return;
          setValue(e);
        }}
      />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MinMaxDateType {
  text: string;
  value?: Date;
  setValue: (value: Date) => void;
}
