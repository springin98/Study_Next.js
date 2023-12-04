"use client";
import { useState } from "react";
import CategoryOption from "./CategoryOption";
import { styled } from "styled-components";
import FAQListBox from "./FAQListBox";

export default function Body() {
  const [filterText, setFilterText] = useState("");
  const [selected, setSelected] = useState<string>("사고");
  const faq_list = [
    {
      bno: "16",
      cname: "대여자격",
      comment:
        "■ 면허증 없이는 차량 대여가 불가능합니다. <br>단, 면허증 대체서류 지참 후 방문시 대여 가능합니다.<br><br>■ 면허증 대체 서류 종류 <br>① 운전경력 증명서 (7일 이내 발급건)&nbsp;<br>- 발급처 : 경찰서, 민원 24 (공인인증서 필요)<br><br>② 렌트카 대여 확인증 (면허조회 증명서) <br>- 제주공항 1층 4번 게이트 자치경찰대 <br><br>③ 임시면허증 (면허증 분실 후 1개월 이내 사용 가능한 임시 면허증) <br>- 가까운 경찰서 민원실<br><br>④ 국제 면허증 <br>- 도로교통공단<br>",
      subject: "면허증 분실했는데 어떻게 하나요?",
    },
    {
      bno: "15",
      cname: "대여자격",
      comment:
        "■ 차량대여 시 제 1운전자 뿐 아니라,&nbsp; 제 2운전자분도 운전면허증 지참 하여 직접 지점 방문시에만 운전자 등록이 가능합니다.",
      subject: "제2운전자 등록할 때, 제2운전자도 면허증을 가지고 가야 하나요?",
    },
    {
      bno: "68",
      cname: "대여요금",
      comment:
        " \r\n<P>■&nbsp;반납시간&nbsp;연장이&nbsp;필요한&nbsp;경우,&nbsp;사전에&nbsp;콜센터(1588-3340)로&nbsp;연장&nbsp;가능여부를&nbsp;확인해야하며,&nbsp;연장&nbsp;시&nbsp;발생한&nbsp;추가요금은&nbsp;고객부담&nbsp;입니다.&nbsp; </P>\r\n<P>또한,&nbsp;연장이&nbsp;불가한&nbsp;경우&nbsp;예약한&nbsp;시간에&nbsp;맞춰&nbsp;차량&nbsp;반납을&nbsp;해주셔야&nbsp;합니다.&nbsp;</P>\r\n<P>회사동의없이&nbsp;무단연장&nbsp;이용&nbsp;중&nbsp;발생한&nbsp;사고는&nbsp;종합보험,&nbsp;차량손해면책제도&nbsp;적용불가로&nbsp;고객이&nbsp;손해배상&nbsp;책임을&nbsp;져야하며,</P>\r\n<P>사고로&nbsp;인해&nbsp;회사에&nbsp;손해가&nbsp;발생한&nbsp;경우&nbsp;고객이&nbsp;손해를&nbsp;배상해야&nbsp;합니다.</P>\r\n<P>(24시간이상&nbsp;연락두절&nbsp;및&nbsp;임의&nbsp;무단사용&nbsp;시&nbsp;차량&nbsp;회수&nbsp;및&nbsp;손해보전에&nbsp;필요한&nbsp;모든&nbsp;법적조치를&nbsp;취할&nbsp;수&nbsp;있습니다.)</P>",
      subject: "예약한 시간보다 늦게 반납할 경우 어떻게 되나요?",
    },
    {
      bno: "62",
      cname: "회원",
      comment:
        "<BR>\r\n<P>■ 2017년 07월 01일 접수건부터&nbsp; 회원 이용금액의 0.5% 적립 (카드,계좌이체 상관없이 동일적용)<BR>■ 홈페이지 내용 확인 및 콜센터(1588-3340)으로 문의 바랍니다.&nbsp;</P>",
      subject: "이용한 금액의 얼마만큼 적립해주나요?",
    },
    {
      bno: "62",
      cname: "회원",
      comment:
        "<BR>\r\n<P>■ 안녕하세요 2017년 07월 01일 접수건부터&nbsp; 회원 이용금액의 0.5% 적립 (카드,계좌이체 상관없이 동일적용)<BR>■ 홈페이지 내용 확인 및 콜센터(1588-3340)으로 문의 바랍니다.&nbsp;</P>",
      subject: "이용한 금액의 얼마만큼 적립해주나요?",
    },
    {
      bno: "62",
      cname: "회원",
      comment:
        "<BR>\r\n<P>■ 하림 2017년 07월 01일 접수건부터&nbsp; 회원 이용금액의 0.5% 적립 (카드,계좌이체 상관없이 동일적용)<BR>■ 홈페이지 내용 확인 및 콜센터(1588-3340)으로 문의 바랍니다.&nbsp;</P>",
      subject: "이용한 금액의 얼마만큼 적립해주나요?",
    },
  ];
  const category: Array<string> = [
    "대여자격",
    "분실",
    "회원",
    "예약",
    "대여요금",
  ];
  const filteredData = faq_list.filter((item) => {
    const isMatchingText =
      item.comment.includes(filterText) || item.subject.includes(filterText);

    return isMatchingText && item.cname === selected;
  });
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setFilterText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setFilterText(inputValue);
    }
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <>
        <Box isfocused={isFocused}>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
          <Text
            isselected={inputValue}
            onClick={() => {
              setFilterText(inputValue);
            }}
          >
            검색
          </Text>
        </Box>
        <CategoryOption
          category={category}
          selected={selected}
          setSelected={setSelected}
        />
      </>
      <SearchList>
        {filteredData.map((faq, index: number) => (
          <FAQListBox
            key={index}
            faq={faq}
            selected={selected}
            inputValue={inputValue}
          />
        ))}
      </SearchList>
    </div>
  );
}
const Box = styled.div<{ isfocused: boolean }>`
  display: flex;
  align-items: center;
`;

const Text = styled.p<{ isselected: string }>`
  color: ${(props) => (props.isselected ? "black" : "gray")};
  cursor: pointer;
`;
const SearchList = styled.div``;

interface FAQListProps {
  filteredData: FAQSearch[];
  selected: string;
  inputValue: string;
}

interface FAQSearch {
  bno: number;
  cname: string;
  subject: string;
  comment: string;
}
