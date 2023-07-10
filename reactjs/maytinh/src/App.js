import React, { useState } from "react";
import "./App.css";
import './styleCal.css'
import './components/Button.js'
import Button from "./components/Button.js";
import Input from "./components/OutputScreen.js";
const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");  

  
  const addToText = (value) => {
    setText((text) => [...text, value+" "]);
  };
  
  const calculatorResult = () => {
    setResult(eval(text.join("")).toString());
  };
  
  const clearAll = () => {
    setText((text) => "");
    setResult((result) => "");
  };

  return (
    <div className="Wrapper">
      <div className="Cal">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbols="1" handleClick={addToText}/>
          <Button symbols="2" handleClick={addToText}/>
          <Button symbols="3" handleClick={addToText}/>
          <Button symbols="+" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbols="4" handleClick={addToText}/>
          <Button symbols="5" handleClick={addToText}/>
          <Button symbols="6" handleClick={addToText}/>
          <Button symbols="-" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbols="7" handleClick={addToText}/>
          <Button symbols="8" handleClick={addToText}/>
          <Button symbols="9" handleClick={addToText}/>
          <Button symbols="*" handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbols="" handleClick={addToText}/>
          <Button symbols="AC" handleClick={clearAll}/>
          <Button symbols="=" handleClick={calculatorResult}/>
          <Button symbols="/" handleClick={addToText}/>
        </div>
        
      </div>

    </div>
  );
};

export default App;
