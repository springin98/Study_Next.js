"use client";
import { useCallback } from "react";
import styled from "styled-components";

export default function Body() {
  const { openScroll, lockScroll } = useScroll();

  return (
    <Wrapper>
      <button onClick={() => openScroll()}>Scroll Open</button>
      <button onClick={() => lockScroll()}>Scroll Lock</button>
    </Wrapper>
  );
}

export const useScroll = () => {
  let scrollPosition: number = 0;

  const openScroll = useCallback(() => {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("width");
  }, []);

  const lockScroll = useCallback(() => {
    scrollPosition = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  }, []);

  return { openScroll, lockScroll };
};

const Wrapper = styled.div`
  height: 200vh;
  background: linear-gradient(pink 50%, white 0);
  background-size: 100% 50%;
`;