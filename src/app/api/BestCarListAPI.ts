export async function BestCarListAPI() {
  const url = process.env.NEXT_PUBLIC_API_URL_BESTCARLIST;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = {};

  if (!url) {
    alert(
      "인기차량 리스트 호출 API의 URL이 없습니다.\n.env 파일에서 URL을 확인해주세요."
    );
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data.data;
}
