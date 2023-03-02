import { useState } from "react";
import Button from "./components/Button";

function operate(symbol, first, second) {
  if (symbol === "+") {
    return first + second;
  }
  if (symbol === "-") {
    return first - second;
  }
  if (symbol === "X") {
    return first * second;
  }
  if (symbol === "/") {
    return first / second;
  }
}

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  console.log(firstNumber, operation, secondNumber);
  function createNumberHandler(symbol) {
    return () => {
      if (!operation) {
        console.log("working");
        setFirstNumber(firstNumber + symbol);
      } else {
        setSecondNumber(secondNumber + symbol);
      }
    };
  }
  function createOperationHandler(symbol) {
    return () => {
      if (symbol !== "=") {
        setOperation(symbol);
        if (operation && firstNumber && secondNumber) {
          const total = operate(operation, +firstNumber, +secondNumber);
          setFirstNumber(total);
          setSecondNumber("");
        }
      } else {
        const total = operate(operation, +firstNumber, +secondNumber);
        console.log(total);
        setFirstNumber(total);
        setSecondNumber("");
      }
    };
  }
  function reset() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  }
  let displayNumber = firstNumber || "0";
  if (operation && secondNumber) {
    displayNumber = secondNumber;
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[350px]">
        <div className="h-16 bg-[#7B7A89] w-full flex justify-end items-center px-4">
          <span className="text-3xl font-bold text-white">{displayNumber}</span>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="flex">
              <Button bg="bg-[#DCDBDC]" onClick={reset} color={"color"}>
                AC
              </Button>
              {["+/-", "%"].map((el, i) => {
                return (
                  <Button key={i} bg="bg-[#DCDBDC]" color={"color"}>
                    {el}
                  </Button>
                );
              })}
            </div>
            <div className="grid grid-cols-3">
              {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
                (el, i) => {
                  return (
                    <Button
                      onClick={createNumberHandler(el)}
                      key={i}
                      bg="bg-[#DCDBDC]"
                      color={"color"}
                      large={el === "0"}
                    >
                      {el}
                    </Button>
                  );
                }
              )}
            </div>
          </div>
          <div className="flex flex-col w-[25%]">
            {["/", "X", "-", "+", "="].map((el, i) => {
              return (
                <Button
                  key={i}
                  bg="bg-[#F48637]"
                  onClick={createOperationHandler(el)}
                  color={"text-white"}
                >
                  {el}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;