import { Cookies } from "react-cookie";

import { Button, Div } from "./Body";
import { useState } from "react";
import { produce } from "immer";
import { styled } from "styled-components";

export default function GetCookies() {
  const [input, setInput] = useState({
    key: "",
    value: "",
  });
  const [all, setAll] = useState<any>(null);

  const onSetInput = ({ text, position }: onSetInputProps) => {
    setInput((prevState) =>
      produce(prevState, (draft) => {
        if (position === "key") {
          draft.key = text;
        } else {
          draft.value = text;
        }
      })
    );
  };

  const onClick = (position: "get" | "all") => {
    if (position === "get") {
      const value: string = getCookies(input.key);
      onSetInput({ text: value, position: "value" });
    } else {
      const value = getAll();
      setAll(JSON.stringify(value));
    }
  };

  return (
    <Div>
      <h3>쿠키의 값 가져오기</h3>
      <label>
        Key :&nbsp;
        <input
          type="text"
          placeholder="key"
          value={input.key}
          onChange={(e) =>
            onSetInput({ text: e.target.value, position: "key" })
          }
        />
        <button onClick={() => onClick("get")}>출력</button>
      </label>
      <TextBox>{!input.value ? "없음" : input.value}</TextBox>
      <Button onClick={() => onClick("all")}>모두 출력</Button>
      <TextBox>{all}</TextBox>
    </Div>
  );
}

const cookies = new Cookies();

const getCookies = (key: string) => {
  const getKey = cookies.get(key);
  return getKey;
};

const getAll = () => {
  const getAllCookies = cookies.getAll({ doNotParse: false });
  return getAllCookies;
};

interface onSetInputProps {
  text: string;
  position: "key" | "value";
}

const TextBox = styled.div`
  width: 500px;
  height: 500px;
  border: 2px solid black;
  overflow: auto;
`;
