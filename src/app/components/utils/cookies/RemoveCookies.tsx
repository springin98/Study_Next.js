import { useState } from "react";
import { Cookies } from "react-cookie";

export default function RemoveCookies() {
  const [value, setValue] = useState<string>("");
  const onClick = (key: string) => {
    removeCookies(key);
  };

  return (
    <>
      <h3>쿠키 값 삭제하기</h3>
      <label>
        Key :&nbsp;
        <input
          type="text"
          placeholder="key"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          if (value.length < 1) return;
          onClick(value);
        }}
      >
        삭제
      </button>
    </>
  );
}

const removeCookies = (key: string) => {
  const cookies = new Cookies();

  cookies.remove(key, { path: `/` });
  return;
};
