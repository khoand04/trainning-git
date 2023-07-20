import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/OutputScreen";
import "./App.css";
import './styleCal.css'
const App = () => {
  const stack = [];
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value]);
  };
  const calculatorResult = () => {
    setResult(CalPostfix);
  };

  const clearAll = () => {
    setText((text) => "");
    setResult((result) => "");
  };

  const precedence = (opertor) => {
    switch (opertor) {
      case "+":
      case "-": return 1;
      case "*":
      case "/": return 2;
      default:
        return 0;
    }
  };

  function InfixtoPostfix() {
    let postfix ="";
    for (let i = 0; i < text.length; i++) {
      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(text[i])) {
        postfix += text[i];
      } else if (["+", "-", "*", "/"].includes(text[i])) {
        while (!stack.length == "" && precedence(text[i]) <= precedence(stack[stack.length - 1])) {
          postfix += stack.pop();
        }
        stack.push(text);
      } while (!stack.length == "") {
        stack.pop();
      }

    }
  }

  function CalPostfix(postfix) {
    postfix = InfixtoPostfix.toString();
    let str =postfix.split('').join('');
    str.split('').forEach(s => {

      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(s.trim())) {

        stack.push(+s);
      }
      else if (["+", "-", "*", "/"].includes(s.trim())) {

        let x = stack.pop();
        let y = stack.pop();
        switch (s) {
          case "+": y = y+x;
            break;
          case "-": y = y-x;
            break;
          case "*": y = y*x;
            break;
          case "/": y = y/x;
            break;
          case "%": y = y%x;
            break;

        }
        stack.push(y);

      }
    })


    return stack.pop();
  }

  return (
    <div className="Wrapper">
      <div className="Cal">
        <Input text={text} result={result} />

        <div className="row">
          {[1, 2, 3, "+"].map((i) => (
            <Button symbols={i} handleClick={addToText} />
          ))}
        </div>
        <div className="row">
          {[4, 5, 6, "-"].map((i) => (
            <Button symbols={i} handleClick={addToText} />
          ))}
        </div>
        <div className="row">
          {[7, 8, 9, "*"].map((i) => (
            <Button symbols={i} handleClick={addToText} />
          ))}
        </div>
        <div className="row">
          <Button />
          <Button symbols="AC" handleClick={clearAll} />
          <Button symbols="=" handleClick={calculatorResult} />
          <Button symbols="/" handleClick={addToText} />
        </div>

      </div>

    </div>
  );
};

export default App;
