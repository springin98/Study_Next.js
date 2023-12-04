export default function Body() {
  const content01 =
    '<p nanum="" gothic",="" "malgun="" sans-serif;="" outline:="" none;="" vertical-align:="" baseline;="" letter-spacing:="" -0.7px;="" font-size:="" 14px;="" text-size-adjust:="" none="" !important;="" padding-top:="" 9px="" !important;"="" style="margin-bottom: 9px; color: rgb(51, 51, 51); font-family: " open="" sans",="" arial,="" helvetica,="" box-sizing:="" border-box;"="">안녕하십니까, 제주스타렌터카입니다.</p><p style="margin-bottom: 9px; color: rgb(51, 51, 51); font-family: " open="" sans",="" arial,="" helvetica,="" sans-serif;="" font-size:="" 14px;="" box-sizing:="" border-box;"=""><br style="box-sizing: border-box;">예약에 앞서 차종 옵션이 궁금하여 전화 문의 / 게시판 문의하는 고객님들이 많아 전 차종 옵션표 공지합니다~</p><p>&nbsp;</p>';
  const content02 =
    '<div class="pc" style="margin: -30px -60px !important;"><img src="http://img.jejustar.co.kr/event/notice_181226.jpg" border="0" alt=""></div>';
  const imgSrcContent01 = useImageSrcExtractor(content01);
  const imgSrcContent02 = useImageSrcExtractor(content02);
  return (
    <>
      <h1>형태 변환 01</h1>
      {imgSrcContent01.includes("http") ? (
        <img src={imgSrcContent01} />
      ) : (
        <p>{imgSrcContent01}</p>
      )}
      <br />
      <h1>형태 변환 02</h1>
      {imgSrcContent02.includes("http") ? (
        <img src={imgSrcContent02} />
      ) : (
        <p>{imgSrcContent02}</p>
      )}
    </>
  );
}

export const useImageSrcExtractor = (inputString: string) => {
  const imgTagRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/;
  const match = inputString.match(imgTagRegex);

  if (match && match[1]) {
    const imgSrc = match[1];
    return imgSrc;
  }
  const text = inputString
    .replaceAll("</p>", "</p>\n")
    .replaceAll("</div>", "</div>\n")
    .replaceAll(/(<([br^>]+)>)/gi, "\n")
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/(&#?[a-zA-Z0-9]+;)/gi, "");

  return text;
};
