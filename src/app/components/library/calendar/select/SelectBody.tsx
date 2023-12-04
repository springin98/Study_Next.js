"use client";
import { produce } from "immer";
import { styled } from "styled-components";

import { formatDayType, formatMonthType, stateType } from "../Body";

import Locale from "./Locale";
import CalendarType from "./CalendarType";
import Label from "./Label";
import MinMaxDetail from "./MinMaxDetail";
import MinMaxDate from "./MinMaxDate";
import FormatDay from "./FormatDay";
import FormatMonth from "./FormatMonth";
import { Detail } from "node_modules/react-calendar/dist/esm/shared/types";

export default function SelectBody({ state, setState }: SelectBodyProps) {
  const setMinDate = (value: Date) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.minDate = value;
      })
    );
  };
  const setMaxDate = (value: Date) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.maxDate = value;
      })
    );
  };
  const setMinDetail = (value: Detail) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.minDetail = value;
      })
    );
  };
  const setMaxDetail = (value: Detail) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.maxDetail = value;
      })
    );
  };
  const setFormatDay = (value: formatDayType) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.formatDay = value;
      })
    );
  };
  const setFormatMonth = (value: formatMonthType) => {
    setState((preState) =>
      produce(preState, (draft) => {
        draft.formatMonth = value;
      })
    );
  };

  return (
    <>
      <Locale state={state} setState={setState} />
      <CalendarType state={state} setState={setState} />
      <Label state={state} setState={setState} />
      <Div>
        <MinMaxDetail
          text={"minDetail"}
          value={state.minDetail}
          setValue={setMinDetail}
        />
        <MinMaxDetail
          text={"maxDetail"}
          value={state.maxDetail}
          setValue={setMaxDetail}
        />
      </Div>
      <Div>
        <MinMaxDate
          text="minDate"
          value={state.minDate}
          setValue={setMinDate}
        />
        <MinMaxDate
          text="maxDate"
          value={state.maxDate}
          setValue={setMaxDate}
        />
      </Div>
      <FormatDay value={state.formatDay} setValue={setFormatDay} />
      <FormatMonth value={state.formatMonth} setValue={setFormatMonth} />
    </>
  );
}

const Div = styled.div`
  display: flex;
  margin-top: 10px;
`;

interface SelectBodyProps {
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
}
