"use client";
import { styled } from "styled-components";
import SaveCookies from "./SaveCookies";
import GetCookies from "./GetCookies";
import RemoveCookies from "./RemoveCookies";

export default function Body() {
  return (
    <>
      <SaveCookies />
      <GetCookies />
      <RemoveCookies />
    </>
  );
}

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  width: fit-content;
`;
