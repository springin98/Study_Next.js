import { styled } from "styled-components";

export default function Category({
  category,
  selected,
  setSelected,
}: CategoryProps) {
  //   const [faqCate, setFaqCate] = useAtom(faqCateAtom);
  //   const setFAQ = useSetAtom(faqAtom);

  //   const callAPI = async (cate: number) => {
  //     const data = await faqAPI({ cate: cate, page: 1 });
  //     setFAQ(data.data);
  //   };

  return (
    <Div
      isselected={selected === category}
      onClick={() => {
        setSelected(category);
      }}
    >
      {category}
    </Div>
  );
}
// interface CategoryProps {
//   category: categoryType;
// }

// interface categoryType {
//   cate: number;
//   cname: string;
// }

interface CategoryProps {
  category: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Div = styled.div<{ isselected: boolean }>`
  background-color: ${(props) => (props.isselected ? "blue" : "gray")};
  display: inline-block;
  color: white;
  padding: 6px 0;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0.5% 18px;
  cursor: pointer;
  min-width: 9%;
  text-align: center;
  text-overflow: ellipsis;
`;
