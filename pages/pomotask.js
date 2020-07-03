import React from "react";
import { useInterval } from "../components/customHooks";

const initialItems = [
  {
    name: "Create PomoTask app for #Koala",
    datetimeStarted: "2 July 2pm",
  },
  {
    name: "Work on the Payment screens for #RemoteCheckPayment",
    datetimeStarted: "2 July 3pm",
  },
  {
    name: "Turn on TroPro 2020 Week 4 for #RowmarkAustralia",
    datetimeStarted: "2 July 4pm",
  },
];

const pomoInitialState = {
  running: false,
  remainingSeconds: 1500,
};

function PomoTaskPage() {
  const [manualModeOn, setManualOn] = React.useState(false);
  const [pomoState, setPomoState] = React.useState(pomoInitialState);
  const [logState, setLogState] = React.useState({
    newEntry: "",
    items: initialItems,
  });

  function toggleManualMode(event) {
    event.preventDefault();
    setManualOn(!manualModeOn);
  }

  function startPomo(event) {
    event.preventDefault();
    setPomoState((state) => ({
      ...state,
      running: true,
      remainingSeconds: 1500,
    }));
  }

  function cancelPomo(event) {
    event.preventDefault();
    setPomoState((state) => ({
      ...state,
      running: false,
    }));
  }

  function donePomo(event) {
    event.preventDefault();
    setPomoState((state) => ({
      ...state,
      running: false,
    }));
  }

  function changeEntry(event) {
    event.persist();
    setLogState((state) => ({
      ...state,
      newEntry: event.target.value,
    }));
  }

  function saveEntry(event) {
    event.persist();
    event.preventDefault();

    if (logState.newEntry != "") {
      const currentItems = logState.items;
      currentItems.push({
        name: logState.newEntry,
        datetimeStarted: "2 July 4pm",
      });

      setLogState((state) => ({
        ...state,
        items: currentItems,
        newEntry: "",
      }));

      setManualOn(false);
    }
  }

  const minuteDisplay = () => Math.floor(pomoState.remainingSeconds / 60);
  const secondDisplay = () => {
    const mod = Math.floor(pomoState.remainingSeconds % 60);
    return mod < 10 ? `0${mod}` : mod;
  };

  useInterval(
    () => {
      if (pomoState.remainingSeconds === 0) {
        setPomoState((state) => ({
          ...state,
          running: false,
        }));
      } else {
        setPomoState((state) => ({
          ...state,
          remainingSeconds: state.remainingSeconds - 1,
        }));
      }
    },
    pomoState.running ? 1000 : 0
  );

  return (
    <div className="min-h-screen">
      <header
        className="pb-10 mb-3 bg-gray-200 h-32"
        style={{ marginBottom: "-2rem" }}
      >
        {manualModeOn ? (
          <div className="max-w-md mx-auto h-full">
            <textarea
              className="bg-transparent w-full h-full px-5 py-2"
              placeholder="What have you just done?"
              value={logState.newEntry}
              onChange={changeEntry}
            ></textarea>
          </div>
        ) : pomoState.running ? (
          <>
            <h1 className="pt-4 lg:pt-3 font-bold text-6xl leading-tight text-gray-800 text-center">
              <span className="text-red-600">{minuteDisplay()}</span>
              <span className="text-red-400">:{secondDisplay()}</span>
            </h1>
          </>
        ) : (
          <h1 className="pt-6 font-bold text-4xl leading-tight text-gray-900 text-center">
            Pomo<span className="text-red-600">Task</span>
          </h1>
        )}
      </header>
      <main className="py-3 px-5 lg:py-3 lg:px-12">
        <div className="w-64 mx-auto">
          {manualModeOn ? (
            <button
              onClick={saveEntry}
              className="px-6 py-1 relative rounded-lg bg-red-600 border border-red-600 shadow-md text-center w-full"
            >
              <div className="text-xl font-bold text-white">Save</div>
            </button>
          ) : pomoState.running ? (
            <button
              onClick={donePomo}
              className="px-6 py-1 relative rounded-lg bg-red-600 border border-red-600 shadow-md text-center w-full"
            >
              <div className="text-xl font-bold text-white">Done</div>
            </button>
          ) : (
            <button
              onClick={startPomo}
              className="px-6 py-1 relative rounded-lg bg-white border border-gray-400 shadow-md text-center w-full"
            >
              <div className="text-xl font-bold text-red-600">
                Start Pomodoro
              </div>
            </button>
          )}

          <div className="text-center">
            {pomoState.running ? (
              <button className="text-red-600 mt-2" onClick={cancelPomo}>
                Cancel
              </button>
            ) : (
              <button className="text-red-600 mt-2" onClick={toggleManualMode}>
                {manualModeOn ? `Cancel` : `Manual entry`}
              </button>
            )}
          </div>
        </div>
        <div className="max-w-md mx-auto mt-8">
          <div className="uppercase tracking-wider font-bold text-gray-400">
            Today
          </div>
          {logState.items.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <div className="flex">
                <span className="w-4/6">{item.name}</span>
                <span className="w-2/6 text-gray-500 text-right">
                  {item.datetimeStarted}
                </span>
              </div>
            </div>
          ))}

          <div className="mt-10 uppercase tracking-wider font-bold text-gray-400">
            Log
          </div>
          {logState.items.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-3">
              <div className="flex">
                <span className="w-4/6">{item.name}</span>
                <span className="w-2/6 text-gray-500 text-right">
                  {item.datetimeStarted}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PomoTaskPage;
