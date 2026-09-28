import React, { useReducer } from "react";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
      };

    case "NEXT_QUESTION": {
      const current = state.questions[state.currentQuestion];
      const newScore =
        state.selectedOption === current.answer
          ? state.score + 1
          : state.score;

      const nextQuestion = state.currentQuestion + 1;

      if (nextQuestion >= state.questions.length) {
        return {
          ...state,
          score: newScore,
          showScore: true,
        };
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedOption: "",
        score: newScore,
      };
    }

    case "RESTART_QUIZ":
      return initialState;

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentQuestion = state.questions[state.currentQuestion];

  const handleOptionSelect = (option) => {
    dispatch({
      type: "SELECT_OPTION",
      payload: option,
    });
  };

  const handleNextQuestion = () => {
    if (state.selectedOption === "") {
      return;
    }

    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  if (state.showScore) {
    return (
      <div>
        <h3>Quiz Completed</h3>
        <p>
          Your score: {state.score} / {state.questions.length}
        </p>

        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Question Bank</h3>

      <p>
        Question {state.currentQuestion + 1} / {state.questions.length}
      </p>

      <h4>{currentQuestion.question}</h4>

      {currentQuestion.options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={state.selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </label>
        </div>
      ))}

      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}

export default QuestionBank;
