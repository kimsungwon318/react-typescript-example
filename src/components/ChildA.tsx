import React, { useState } from "react";
import ChildB from "./ChildB";

export default React.memo(function ChildA({ count }: { count: number }) {
  // const [count2, setCount2] = useState(0);
  console.log("ChildA");
  return (
    <>
      <h1>count: {count}</h1>
      {/* <h1>ChildA Componet</h1>
      <h1>count: {count2}</h1>
      <button onClick={() => setCount2((count2) => count2 + 1)}>증가</button> */}
      <ChildB />
    </>
  );
});
