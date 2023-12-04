import { useImageSrcExtractor } from "@/components/utils/changeContentFormat/Body";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function FAQListBox({
  faq,
  selected,
  inputValue,
}: FAQListBoxProps) {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  //   useEffect(() => {
  //     setIsOpen(false);
  //   }, [selected, inputValue]);

  useEffect(() => {
    setIsOpen(undefined);
  }, [faq]);

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>{faq.cname}</div>
        <div>{faq.subject}</div>
      </div>
      <Div isselected={isOpen}>
        <div>
          <p></p>
          <p>{useImageSrcExtractor(faq.comment)}</p>
        </div>
      </Div>
    </div>
  );
}

interface FAQListBoxProps {
  faq: FAQList;
  selected: string;
  inputValue: string;
}
interface FAQList {
  cname: string;
  subject: string;
  comment: string;
}

const Div = styled.div<{ isselected: any }>`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0.5% 18px;
  cursor: pointer;
  overflow: hidden;
  max-height: 0px;
  background-color: rgba(241, 246, 255, 0.5);
  white-space: pre-wrap;
  max-height: ${(props) => (props.isselected ? "140px" : "0")};
  overflow-y: scroll;
  transition: max-height 0.4s linear;
  &::-webkit-scrollbar {
    display: none;
  }
`;
