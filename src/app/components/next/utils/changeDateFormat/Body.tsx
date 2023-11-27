export default function Body() {
  return (
    <>
      <h3>String Type of Unix Time to YYYY.MM.DD HH:MM Format</h3>
      <span>920947320</span> = <span>{changeUnixTime("920947320")}</span>
      <p>Unix Time : 1970월 1월 1일 00시 00분 00초부터 현재까지 누적된 초 값</p>
      <br />
      <h3>{`Change "YYYY.MM.DD" to MM.DD (Day) HH:MM`}</h3>
      <span>{`"1999.03.09"`}</span>
      {` = `}
      <span>{changeDateFormat("1999.03.09")}</span>
      <br />
      <h3>new Date to YYYYMMDD</h3>
      <span>new Date()</span>
      {` = `}
      <span>{getFormatYYYYMMDD(new Date())}</span>
      <br />
      <h3>new Date to MM.DD (Day) HH:MM</h3>
      <span>new Date()</span>
      {` = `}
      <span>{getFormattedString(new Date())}</span>
      <br />
      <h3>new Date time to MM. DD</h3>
      <span>new Date()</span>
      {` = `}
      <span>{getFormattedDate(new Date())}</span>
      <br />
      <h3>new Date time to HH:MM</h3>
      <span>new Date()</span>
      {` = `}
      <span>{getFormattedTime(new Date())}</span>
    </>
  );
}

// Changing String Type of Unix Time to YYYY.MM.DD HH:MM Format ===========================
export const changeUnixTime = (unixTime: string) => {
  const date = new Date(Number(unixTime) * 1000);

  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

  return formattedDate;
};

//Change "YYYY.MM.DD" to MM.DD (Day) HH:MM ===========================
export const changeDateFormat = (inputDate: string) => {
  var safariInput = inputDate.replaceAll(".", "-");
  const date = new Date(safariInput);

  return getFormattedString(date);
};

function getWeekday(date: Date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return weekdays[date.getDay()];
}

// new Date to MM. DD
export function getFormattedDate(date: Date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${month}. ${day}`;
}

// new Date time to HH:MM
export function getFormattedTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${hours}:${formattedMinutes}`;
}

// new Date to MM.DD (Day) HH:MM ===========================
export function getFormattedString(date: Date) {
  var month = "";
  if (date.getMonth() + 1 < 10) {
    month = "0" + (date.getMonth() + 1).toString();
  } else {
    month = (date.getMonth() + 1).toString();
  }
  var day = "";
  if (date.getDate() < 10) {
    day = "0" + date.getDate().toString();
  } else {
    day = date.getDate().toString();
  }
  var hour = "";
  if (date.getHours() < 10) {
    hour = "0" + date.getHours().toString();
  } else {
    hour = date.getHours().toString();
  }
  var min = "";
  if (date.getMinutes() < 10) {
    min = "0" + date.getMinutes().toString();
  } else {
    min = date.getMinutes().toString();
  }

  const formattedDate = `${month}.${day} (${getWeekday(date)}) ${hour}:${min}`;

  return formattedDate;
}

// new Date to YYYYMMDD Format ===========================
export function getFormatYYYYMMDD(date: Date) {
  var month = (date.getMonth() + 1).toString(); //현재 월 출력
  var day = date.getDate().toString(); // 현재 일 출력

  // 10 미만일 경우, 앞에 "0"을 붙여 한 자리 숫자를 두 자리로 만들기
  if (Number(day) < 10) {
    day = "0" + day;
  }
  if (Number(month) < 10) {
    month = "0" + month;
  }

  return `${date.getFullYear()}${month}${day}`;
}
