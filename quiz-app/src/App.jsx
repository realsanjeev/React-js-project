import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header";
import QuestionView from "./components/QuestionView";
import Result from "./components/Result";

import "./styles.css";

export default function App() {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => {
        const retrivedData = data.results.map((item) => {
          const newOptions = item.incorrect_answers;
          newOptions.splice(
            ((newOptions.length + 1) * Math.random()) | 0,
            0,
            item.correct_answer
          );
          return {
            question: item.question,
            options: item.incorrect_answers,
            correct_answer: item.correct_answer,
            id: nanoid(),
          };
        });
        setQuestion(retrivedData);
        setAnswer([]);
        setResult(false);
        setCount(0);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data:", error);
      });
  }, []);

  var quizTest;
  if (question.length > 0) {
    quizTest = question.map((item) => {
      return (
        <QuestionView item={item} key={item.id} handleAnswer={handleAnswer} />
      );
    });
  }

  function handleAnswer(id, choice) {
    // event.preventDefault();
    const newChoice = {
      id: id,
      choice: choice,
      isChecked: true,
    };
    let flag = false;
    const newAnswerArray = [];

    for (let i = 0; i < answer.length; i++) {
      if (answer[i].id === id) {
        newAnswerArray.push(newChoice);
        flag = true;
      } else {
        newAnswerArray.push(answer[i]);
      }
    }
    if (flag === false) {
      newAnswerArray.push(newChoice);
    }
    setAnswer(newAnswerArray);
  }

  function submitHandler() {
    for (let i = 0; i < question.length; i++) {
      const questionId = question[i].id;
      const correctAns = question[i].correct_answer;
      const userChoice = answer.filter((item) => item.id === questionId);
      console.log("choice: ", userChoice, "correctAns", correctAns);
      if (userChoice.length && correctAns === userChoice[0].choice) {
        setCount((prevCount) => prevCount + 1);
      }
    }
    setResult(true);

    console.log(count);
    console.log(result);
  }
  function handleRequiz() {
    setResult(false);
    setCount(false);
  }
  return (
    result ? (
      <div>
        <Result score={count} handleRequiz={handleRequiz}/>
      </div>
    ) : (
      <div className="main-container">
        <Header />
        {question.length ? (
          <>
            {quizTest}
            <div>
              <button className="submit" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <h1>Loading quiz question.....</h1>
        )}
      </div>
    )
  )
}
  