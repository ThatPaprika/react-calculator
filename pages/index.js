import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Button from "../components/Button";
import FlexContainer from "../components/FlexContainer";

const Home = () => {
  const [displayedValue, updateDisplayedValue] = useState(0);
  const previousOperation = useRef(null);
  const [firstOperand, updateFirstOperand] = useState(null);
  const [secondOperand, updateSecondOperand] = useState(null);
  const [currentOperation, updateOperation] = useState(null);

  useEffect(() => {
    if (currentOperation !== null) {
      previousOperation.current = currentOperation;
    }
  }, [currentOperation]);

  const buttonCallback = (input) => {
    if (currentOperation !== null) {
      updateDisplayedValue(input);
      updateOperation(null);
    } else {
      updateDisplayedValue(displayedValue * 10 + input);
    }
  };

  const buttons = [
    {
      title: "0",
      gridArea: "ZERO",
      callback: () => {
        buttonCallback(0);
      },
    },
    {
      title: "1",
      gridArea: "ONE",
      callback: () => {
        buttonCallback(1);
      },
    },
    {
      title: "2",
      gridArea: "TWO",
      callback: () => {
        buttonCallback(2);
      },
    },
    {
      title: "3",
      gridArea: "THREE",
      callback: () => {
        buttonCallback(3);
      },
    },
    {
      title: "4",
      gridArea: "FOUR",
      callback: () => {
        buttonCallback(4);
      },
    },
    {
      title: "5",
      gridArea: "SIX",
      callback: () => {
        buttonCallback(6);
      },
    },
    {
      title: "6",
      gridArea: "FIVE",
      callback: () => {
        buttonCallback(6);
      },
    },
    {
      title: "7",
      gridArea: "SEVEN",
      callback: () => {
        buttonCallback(7);
      },
    },
    {
      title: "8",
      gridArea: "EIGHT",
      callback: () => {
        buttonCallback(8);
      },
    },
    {
      title: "9",
      gridArea: "NINE",
      callback: () => {
        buttonCallback(9);
      },
    },
  ];

  return (
    <>
      <div
        style={{
          display: "grid",
          gap: "1px",
          gridTemplateAreas:
            '"SCREEN SCREEN SCREEN SCREEN" "AC PM PERCENT DIVIDE" "SEVEN EIGHT NINE MULT" "FOUR FIVE SIX MINUS" "ONE TWO THREE PLUS" "ZERO ZERO DOT EQ"',
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          height: "100vh",
        }}
      >
        <FlexContainer
          alignItems="center"
          justifyContent="flex-end"
          style={{
            backgroundColor: "#858694",
            color: "#ffffff",
            fontSize: "75px",
            gridArea: "SCREEN",
            padding: "0px 44px",
          }}
        >
          {displayedValue}
        </FlexContainer>
        {buttons.map((button, index) => {
          return (
            <Button
              title={button.title}
              gridArea={button.gridArea}
              callback={button.callback}
            ></Button>
          );
        })}
        <Button
          isAnOperation
          title="+"
          gridArea="PLUS"
          callback={() => {
            if (firstOperand === null) {
              updateFirstOperand(displayedValue);
            } else {
              if (previousOperation.current == "+") {
                updateDisplayedValue(firstOperand + displayedValue);
                updateFirstOperand(firstOperand + displayedValue);
              } else if (previousOperation.current == "-") {
                updateDisplayedValue(firstOperand - displayedValue);
                updateFirstOperand(firstOperand - displayedValue);
              }
            }
            updateOperation("+");
          }}
        ></Button>
        <Button
          isAnOperation
          title="-"
          gridArea="MINUS"
          callback={() => {
            if (firstOperand === null) {
              updateFirstOperand(displayedValue);
            } else {
              if (previousOperation.current == "+") {
                updateDisplayedValue(firstOperand + displayedValue);
                updateFirstOperand(firstOperand + displayedValue);
              } else if (previousOperation.current == "-") {
                updateDisplayedValue(firstOperand - displayedValue);
                updateFirstOperand(firstOperand - displayedValue);
              }
            }
            updateOperation("-");
          }}
        ></Button>
      </div>
    </>
  );
};

export default Home;
