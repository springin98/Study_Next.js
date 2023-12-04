"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function MultipleCheck() {
  const fuelTypeText: Array<string> = ["휘발유", "경유", "LPG", "전기"];
  const [fuelTypeTotal, setFuelTypeTotal] = useState<boolean>(true);
  const [fuelType, setFuelType] = useState<Array<string>>([]);

  const putType = (text: string) => {
    !fuelType.includes(text)
      ? setFuelType([...fuelType, text])
      : setFuelType(fuelType.filter((item) => item !== text));
  };

  const [filterBtnActive, setFilterBtnActive] = useState<boolean>(true);

  const selectAll = () => {
    if (fuelType.length === 0) {
      setFilterBtnActive(!filterBtnActive);
      setFuelTypeTotal(!fuelTypeTotal);
    } else {
      setFuelType([]);
      setFilterBtnActive(true);
      setFuelTypeTotal(true);
    }
  };

  useEffect(() => {
    if (fuelType.length === 4) {
      setFuelTypeTotal(true);
      setFilterBtnActive(true);
      setFuelType([]);
    } else if (fuelType.length === 0 && !fuelTypeTotal) {
      setFilterBtnActive(false);
    } else if (fuelType.length >= 1 && fuelType.length <= 3) {
      setFuelTypeTotal(false);
      setFilterBtnActive(true);
    } else {
      setFilterBtnActive(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuelType]);

  return (
    <SelectBox>
      <TotalInput
        type="checkbox"
        isselected={fuelTypeTotal}
        onClick={() => {
          selectAll();
        }}
      />
      전체
      {fuelTypeText.map((typeText, index) => {
        return (
          <SelectBox
            key={index}
            onClick={() => {
              putType(typeText);
            }}
          >
            <Input type="checkbox" isselected={fuelType.includes(typeText)} />
            {typeText}
          </SelectBox>
        );
      })}
      <Button isselected={filterBtnActive}>버튼</Button>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  display: flex;
  align-items: center;
`;

const TotalInput = styled.input<{ isselected: boolean }>`
  appearance: none;
  border: 0.8px solid ${(props) => (props.isselected ? "blue" : "gray")};
  background-color: ${(props) => (props.isselected ? "blue" : "gray")};
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Input = styled.input<{ isselected: boolean }>`
  border: 0.8px solid ${(props) => (props.isselected ? "blue" : "gray")};
  appearance: none;
  border: 0.8px solid gray;
  background-color: ${(props) => (props.isselected ? "blue" : "gray")};
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button<{ isselected: boolean }>`
  cursor: pointer;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 3px;
  padding: 9px 12px;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 4px;
  background-color: ${(props) => (props.isselected ? "blue" : "gray")};
`;
