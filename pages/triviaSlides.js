import { questionsBank } from "../components/triviaSlidesData";
import _ from "underscore";
import useSound from "use-sound";
import rightAnswerSound from "../components/audio/rightSound.mp3";
import wrongAnswerSound from "../components/audio/wrongSound.mp3";

function reducer(state, { type, payload }) {
  const nextIndex =
    state.currentQuestionIndex + 1 > state.questionsBank.length - 1
      ? -1
      : state.currentQuestionIndex + 1;

  switch (type) {
    case "setupQuestionsBank":
      return {
        ...state,
        questionsBank: payload,
      };
    case "next":
      return {
        ...state,
        currentQuestionIndex: nextIndex,
      };
    case "back":
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex - 1 <= -1
            ? -1
            : state.currentQuestionIndex - 1,
      };
    case "start":
      return {
        ...state,
        currentQuestionIndex: 0,
      };
    case "home":
      return {
        ...state,
        currentQuestionIndex: -1,
      };
    case "right":
      return {
        ...state,
        totalPoints: state.totalPoints + 1,
      };
    case "wrong":
      return {
        ...state,
      };
    case "round1":
      return {
        ...state,
        questionsBank: _.first(
          questionsBank.filter((question) => question.Points === 1),
          20
        ),
        currentQuestionIndex: 0,
        totalPoints: 0,
      };
    case "round2":
      return {
        ...state,
        questionsBank: _.first(
          questionsBank.filter((question) => question.Points === 5),
          7
        ),
        currentQuestionIndex: 0,
        totalPoints: 0,
      };
  }
}

export default function triviaSlides() {
  const [state, dispatch] = React.useReducer(reducer, {
    questionsBank: [],
    currentQuestionIndex: -1,
    totalPoints: 0,
  });

  const [playRightAnswerSound] = useSound(rightAnswerSound);
  const [playWrongAnswerSound] = useSound(wrongAnswerSound);

  function click(action) {
    return (event) => {
      event && event.preventDefault();

      if (action === "right") {
        console.log("play right answer sound", rightAnswerSound);
        playRightAnswerSound();
      } else if (action === "wrong") {
        console.log("play wrong answer sound", wrongAnswerSound);
        playWrongAnswerSound();
      }

      dispatch({
        type: action,
      });
    };
  }

  function choose(option) {
    return (event) => {
      event && event.preventDefault();
      if (option === state.questionsBank[state.currentQuestionIndex].Answer) {
        click("right")();
      } else {
        click("wrong")();
      }
    };
  }

  return (
    <>
      {state.currentQuestionIndex <= -1 ? (
        <div id="homePage" className="bg-gray-900 min-h-screen">
          <h1
            className="font-bold text-6xl text-red-700 text-center"
            style={{ fontSize: "10rem" }}
          >
            Trivia
          </h1>
          <h2 className="font-bold text-5xl text-blue-500 text-center">
            "Last man standing"
          </h2>

          <h3 className="mt-40 text-5xl text-green-600 font-bold text-center">
            Total points: {state.totalPoints}
          </h3>

          <div className="mt-40 flex flex-row justify-center">
            <button
              className="text-4xl py-3 px-5 border-2 border-blue-300 text-blue-300 font-bold block mr-8"
              onClick={click("round1")}
            >
              Round 1
            </button>
            <button
              className="text-4xl py-3 px-5 border-2 border-blue-300 text-blue-300 font-bold block"
              onClick={click("round2")}
            >
              Round 2
            </button>
          </div>
        </div>
      ) : (
        <div id="questionPage">
          <header className="flex flex-row justify-between items-center bg-blue-900 text-white px-3">
            <div className="text-3xl">
              {state.questionsBank[state.currentQuestionIndex]
                ? state.questionsBank[state.currentQuestionIndex].Id
                : ""}
              . ({state.currentQuestionIndex + 1}/{state.questionsBank.length})
            </div>
            <div className="text-5xl font-bold">
              {state.totalPoints} / {state.questionsBank.length} pts
            </div>
            <div>
              <button onClick={click("home")}>Home</button>
            </div>
          </header>

          <main className="py-4 px-12 bg-gray-100 min-h-screen">
            <h1 className="font-bold text-6xl leading-tight">
              {state.questionsBank[state.currentQuestionIndex]
                ? state.questionsBank[state.currentQuestionIndex].Name
                : "Question Name"}
            </h1>
            <ul className="mt-10 font-bold text-5xl">
              <li className="block">
                A.{" "}
                {state.questionsBank[state.currentQuestionIndex]
                  ? state.questionsBank[state.currentQuestionIndex].A
                  : "Choice A"}
              </li>
              <li className="block">
                B.{" "}
                {state.questionsBank[state.currentQuestionIndex]
                  ? state.questionsBank[state.currentQuestionIndex].B
                  : "Choice B"}
              </li>
              <li className="block">
                C.{" "}
                {state.questionsBank[state.currentQuestionIndex]
                  ? state.questionsBank[state.currentQuestionIndex].C
                  : "Choice C"}
              </li>
              <li className="block">
                D.{" "}
                {state.questionsBank[state.currentQuestionIndex]
                  ? state.questionsBank[state.currentQuestionIndex].D
                  : "Choice D"}
              </li>
            </ul>
          </main>

          <footer className="flex flex-row items-center justify-between bg-gray-500 px-3 py-5 w-full fixed bottom-0">
            <div className="mr-10">
              <button
                className="text-4xl border-4 border-gray-900 w-32 text-center font-bold hover:bg-gray-800 hover:text-white mr-1"
                onClick={click("back")}
              >
                Back
              </button>
              <button
                className="text-4xl border-4 border-green-800 text-green-800 hover:bg-green-700 hover:text-white w-32 text-center font-bold mr-1"
                onClick={click("right")}
              >
                Right
              </button>
              <button
                className="text-4xl border-4 border-red-800 text-red-800 hover:bg-red-700 hover:text-white w-32 text-center font-bold"
                onClick={click("wrong")}
              >
                Wrong
              </button>
            </div>
            <button
              className="text-4xl border-4 border-blue-700 text-blue-700 flex-1 text-center font-bold hover:bg-blue-700 active-blue-700 hover:text-white"
              onClick={choose("A")}
            >
              A
            </button>
            <button
              className="text-4xl border-4 border-blue-700 text-blue-700 flex-1 text-center font-bold hover:bg-blue-700 active-blue-700 hover:text-white"
              onClick={choose("B")}
            >
              B
            </button>
            <button
              className="text-4xl border-4 border-blue-700 text-blue-700 flex-1 text-center font-bold hover:bg-blue-700 active-blue-700 hover:text-white"
              onClick={choose("C")}
            >
              C
            </button>
            <button
              className="text-4xl border-4 border-blue-700 text-blue-700 flex-1 text-center font-bold hover:bg-blue-700 active-blue-700 hover:text-white"
              onClick={choose("D")}
            >
              D
            </button>
            <div className="ml-5">
              <button
                className="text-4xl border-4 border-gray-900 w-32 text-center font-bold hover:bg-gray-800 hover:text-white mr-3"
                onClick={click("next")}
              >
                Next
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
