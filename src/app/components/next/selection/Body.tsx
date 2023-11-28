"use client";
import { useState } from "react";
import { styled } from "styled-components";

export default function Body() {
  const insuranceText = ["Option1", "Option2", "Option3"];
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Option1"
  );

  return (
    <>
      <h1>단일 선택</h1>
      <p>Default : Option1</p>

      <SelectBox>
        {insuranceText.map((text, index) => (
          <Text
            key={index}
            isSelected={selectedOption === text}
            onClick={() => {
              setSelectedOption(text);
            }}
          >
            {text}
          </Text>
        ))}
      </SelectBox>
      <br />

      <h1>다중 선택</h1>
    </>
  );
}

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "blue" : "black")};
  cursor: pointer;
  margin-right: 10px;
  border: 1px solid ${(props) => (props.isSelected ? "blue" : "black")};
  padding: 8px 12px;
  border-radius: 5px;
`;
