import Category from "./Category";

export default function CategoryOption({
  category,
  setSelected,
  selected,
}: CategoryOptionProps) {
  return (
    <div>
      {category?.map((category, index) => (
        <Category
          category={category}
          selected={selected}
          setSelected={setSelected}
          key={index}
        />
      ))}
    </div>
  );
}

interface CategoryOptionProps {
  category: Array<string>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
}
