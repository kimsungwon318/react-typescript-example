import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import User from "./components/User";
import PrintValue from "./components/PrintValue";

function App() {
  const numberValue = 50;
  const stringValue = "aaa";
  const booleanValue = true;
  const arrayValue = [1, 2, 3];
  const objectValue = { name: "kim", age: 20 };
  const handleClick = () => alert("kimsungwon");

  return (
    <>
      <Header />
      <Main />
      <User name="kimsungwon" age={42} />
      <User name="choijuhee" age={32} />
      <PrintValue
        numberValue={numberValue}
        stringValue={stringValue}
        booleanValue={booleanValue}
        arrayValue={arrayValue}
        objectValue={objectValue}
        handleClick={handleClick}
      />
      <Footer />
    </>
  );
}

export default App;
