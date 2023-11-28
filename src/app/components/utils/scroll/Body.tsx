"use client";
import { useCallback } from "react";
import styled from "styled-components";

export default function Body() {
  const { openScroll, lockScroll, scrollUp } = useScroll();

  return (
    <Wrapper>
      <button onClick={() => openScroll()}>Scroll Open</button>
      <button onClick={() => lockScroll()}>Scroll Lock</button>
      <button onClick={() => scrollUp()}>Scroll Up</button>
    </Wrapper>
  );
}

export const useScroll = () => {
  let scrollPosition: number = 0;

  const openScroll = () => {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("width");
  };

  const lockScroll = () => {
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { openScroll, lockScroll, scrollUp };
};

const Wrapper = styled.div`
  height: 200vh;
  background: linear-gradient(pink 50%, white 0);
  background-size: 100% 50%;
`;
