"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";

// import "react-calendar/dist/Calendar.css";
import { Detail } from "node_modules/react-calendar/dist/esm/shared/types";

import Print from "./Print";
import SelectBody from "./select/SelectBody";
import { styled } from "styled-components";

export default function Body() {
  const [state, setState] = useState<stateType>({
    locale: "ko",
    calendarType: "gregory",
    prev2Label: null,
    next2Label: null,
    minDetail: "month",
    maxDetail: "month",
    minDate: undefined,
    maxDate: undefined,
    formatDay: "DD",
    formatMonth: "MM",
  });
  const [value, setValue] = useState<Value>(null);

  return (
    <>
      <h1>Calendar</h1>
      <CalendarContainer>
        <Calendar
          value={value}
          onChange={(e) => setValue(e)}
          locale={state.locale} //한글 표기
          calendarType={state.calendarType} //일주일 시작 : 일요일
          prev2Label={state.prev2Label} //1년 단위 이동 비활성화
          next2Label={state.next2Label} //1년 단위 이동 비활성화
          selectRange={true} //하나의 날짜가 아닌 두 개의 날짜 선택 여부
          allowPartialRange={true} //null 값의 여부
          minDate={state.minDate} //선택할 수 있는 최소 날짜
          maxDate={state.maxDate} //선택할 수 있는 최대 날짜
          formatDay={(locale, date) => dayjs(date).format(state.formatDay)} //일 출력 포맷
          formatMonthYear={(locale, date) =>
            dayjs(date).format(state.formatMonth)
          } //월 출력 포맷
          minDetail={state.minDetail} //버튼 비활성화
          maxDetail={state.maxDetail}
        />
      </CalendarContainer>
      <Print value={value} />
      <SelectBody state={state} setState={setState} />
    </>
  );
}

export interface stateType {
  locale: string;
  calendarType: "gregory" | "hebrew" | "islamic" | "iso8601";
  prev2Label: string | null;
  next2Label: string | null;
  minDetail: Detail;
  maxDetail: Detail;
  minDate?: Date;
  maxDate?: Date;
  formatDay: formatDayType;
  formatMonth: formatMonthType;
}

type ValuePiece = Date | null;
export type Range<T> = [T, T];
export type Value = ValuePiece | Range<ValuePiece>;

export type formatDayType = "YYYY-MM-DD" | "DD" | "D" | "D일";
export type formatMonthType = "MM" | "M" | "MM월" | "M월";

const CalendarContainer = styled.div`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: pink;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
    font: inherit;
    font-size: 0.833em;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: #ffff76;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
