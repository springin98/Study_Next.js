"use client";
import { useState } from "react";
import { styled } from "styled-components";

export default function SingleSelection() {
  const insuranceText = ["Option1", "Option2", "Option3"];
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Option1"
  );

  return (
    <>
      <SelectBox>
        {insuranceText.map((text, index) => (
          <Text
            key={index}
            isselected={selectedOption === text}
            onClick={() => {
              setSelectedOption(text);
            }}
          >
            {text}
          </Text>
        ))}
      </SelectBox>
    </>
  );
}

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p<{ isselected: boolean }>`
  color: ${(props) => (props.isselected ? "blue" : "black")};
  cursor: pointer;
  margin-right: 10px;
  border: 1px solid ${(props) => (props.isselected ? "blue" : "black")};
  padding: 8px 12px;
  border-radius: 5px;
`;
