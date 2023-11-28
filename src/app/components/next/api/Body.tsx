"use client";

import { BestCarListAPI } from "@/api/BestCarListAPI";
import { useState } from "react";

export default function Body() {
  const [data, setData] = useState<any>(null);

  const callAPI = async () => {
    const data = await BestCarListAPI();
    if (!data) {
      alert("호출에 실패했습니다.");
      return null;
    } else return JSON.stringify(data);
  };

  const onClick = () => {
    setData(callAPI());
  };

  return (
    <>
      <h1>API</h1>
      <button onClick={() => onClick()}>인기 차량 리스트 API 호출</button>
      <h4>API Response Data</h4>
      <p>{data}</p>
    </>
  );
}
