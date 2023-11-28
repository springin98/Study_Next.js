"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function MultipleSelection() {
  const carType = ["Option1", "Option2", "Option3"];
  const [selectedOption, setSelectedOption] = useState<Array<string>>([
    "Option1",
  ]);
  const [selectCarKindTotal, setSelectCarKindTotal] = useState<boolean>(true);

  const putType = (car_kind: string) => {
    !selectedOption.includes(car_kind)
      ? setSelectedOption([...selectedOption, car_kind].sort())
      : setSelectedOption(selectedOption.filter((item) => item !== car_kind));
  };
  const selectAll = () => {
    if (selectedOption.length === carType.length) {
      setSelectedOption([]);
    } else if (selectedOption.length === 0) {
      setSelectedOption(["Option1"]);
    } else {
      setSelectedOption([...carType]);
    }
  };

  useEffect(() => {
    if (
      selectedOption.length === carType.length ||
      selectedOption.length === 0
    ) {
      setSelectCarKindTotal(true);
      setSelectedOption([]);
    } else {
      setSelectCarKindTotal(false);
    }
  }, [selectedOption, selectCarKindTotal]);

  return (
    <SelectBox>
      <Text
        isselected={selectCarKindTotal}
        onClick={() => {
          selectAll();
        }}
      >
        전체
      </Text>
      {carType.map((type, index) => (
        <TypeBox
          key={index}
          isselected={selectedOption.includes(type)}
          onClick={() => {
            putType(type);
          }}
        >
          {type}
        </TypeBox>
      ))}
    </SelectBox>
  );
}

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div<{ isselected: boolean }>`
  color: ${(props) => (props.isselected ? "blue" : "black")};
  cursor: pointer;
  margin-right: 10px;
  border: 1px solid ${(props) => (props.isselected ? "blue" : "black")};
  padding: 8px 12px;
  border-radius: 5px;
`;

const TypeBox = styled.div<{ isselected: boolean }>`
  margin-right: 10px;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.isselected ? "blue" : "black")};
  border: 1px solid ${(props) => (props.isselected ? "blue" : "black")};
`;
