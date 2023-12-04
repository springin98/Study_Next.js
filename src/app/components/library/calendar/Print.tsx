export default function Print({ value }: PrintProps) {
  return (
    <>
      <h3>Print</h3>
      <>
        <span>Calendar Value : </span>
        <span>{JSON.stringify(value)}</span>
      </>
      <br />
      <>
        <span>getTime : </span>
        <span>
          {value &&
            value[0] &&
            value[1] &&
            `[${value[0].getTime()},${value[1].getTime()}]`}
        </span>
      </>
    </>
  );
}

interface PrintProps {
  value: any;
}
