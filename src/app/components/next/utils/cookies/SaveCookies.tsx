import { useState } from "react";
import { Cookies } from "react-cookie";
import { Button, Div } from "./Body";
import { produce } from "immer";
import { useRouter } from "next/navigation";

export default function SaveCookies() {
  const router = useRouter();

  const [saveCookies, setSaveCookies] = useState({
    key: "",
    value: "",
  });

  const onChange = ({ e, position }: onChangeProps) => {
    setSaveCookies((prevState) =>
      produce(prevState, (draft) => {
        if (position === "key") {
          draft.key = e.target.value;
        } else {
          draft.value = e.target.value;
        }
      })
    );
  };

  return (
    <Div>
      <h3>쿠키에 값 저장하기</h3>
      <label>
        Key :&nbsp;
        <input
          type="text"
          placeholder="key"
          value={saveCookies.key}
          onChange={(e) => onChange({ e: e, position: "key" })}
        />
      </label>
      <label>
        Value :&nbsp;
        <input
          type="text"
          placeholder="value"
          value={saveCookies.value}
          onChange={(e) => onChange({ e: e, position: "value" })}
        />
      </label>
      <Button
        onClick={() => {
          if (saveCookies.key.length < 1 || saveCookies.value.length < 1)
            return;
          useSaveCookies({ key: saveCookies.key, value: saveCookies.value });
          router.refresh();
        }}
      >
        저장
      </Button>
    </Div>
  );
}

const cookies = new Cookies();

const useSaveCookies = ({ key: key, value: value }: useSaveCookiesProps) => {
  // options (object): Support all the cookie options from RFC 6265
  // path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
  // expires (Date): absolute expiration date for the cookie
  // maxAge (number): relative max age of the cookie from when the client receives it in seconds
  // domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
  // secure (boolean): Is only accessible through HTTPS?
  // httpOnly (boolean): Can only the server access the cookie? Note: You cannot get or set httpOnly cookies from the browser, only the server.
  // sameSite (boolean|none|lax|strict): Strict or Lax enforcement
  return cookies.set(key, value, { path: `/` });
};

interface useSaveCookiesProps {
  key: string;
  value?: string;
}

export interface onChangeProps {
  e: React.ChangeEvent<HTMLInputElement>;
  position: "key" | "value";
}
