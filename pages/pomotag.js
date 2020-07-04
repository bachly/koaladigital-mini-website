import React from "react";
import { useInterval } from "../components/customHooks";
import { getHashTags } from "../components/pureFunctions";

const initialItems = [
  {
    name: "Create PomoTag app for #Koala",
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

function PomoTagPage() {
  const [manualModeOn, setManualOn] = React.useState(false);
  const [pomoState, setPomoState] = React.useState(pomoInitialState);
  const [state, setState] = React.useState({
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
    setState((state) => ({
      ...state,
      newEntry: event.target.value,
    }));
  }

  function saveEntry(event) {
    event.persist();
    event.preventDefault();

    if (state.newEntry != "") {
      const currentItems = state.items;
      currentItems.push({
        name: state.newEntry,
        datetimeStarted: "2 July 4pm",
      });

      setState((state) => ({
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

  function itemsByFirstTag() {
    const itemsByFirstTag = {};

    state.items.map((item) => {
      const hashTags = getHashTags(item.name) || [];
      const firstTag = hashTags[0];
      if (firstTag) {
        itemsByFirstTag[firstTag].push(item);
      }
    });

    return itemsByFirstTag;
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <header
        className="mb-3 bg-white shadow-sm h-48"
        style={{ marginBottom: "-5rem" }}
      >
        <h1 className="px-5 pt-8 font-bold text-4xl leading-tight text-gray-900">
          Pomo<span className="text-red-600">Tag</span>
        </h1>
      </header>
      <main className="py-3 px-5 lg:px-6">
        <div className="max-w-4xl flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/3">
            <div className="">
              <CardSimple>
                <CardTitle>
                  <div className="font-bold text-lg">
                    {manualModeOn ? `Manual` : `Pomodoro`}
                  </div>
                  <div>
                    {!manualModeOn ? (
                      <button
                        className="text-red-600"
                        onClick={toggleManualMode}
                      >
                        {`Manual`}
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </CardTitle>

                <div className="bg-gray-100 border-b border-gray-400 h-24 flex flex-col justify-center">
                  {manualModeOn ? (
                    <>
                      <div className="h-full">
                        <textarea
                          className="w-full h-full px-5 py-2 text-lg bg-transparent"
                          placeholder="What have you just done?"
                          value={state.newEntry}
                          onChange={changeEntry}
                        ></textarea>
                      </div>
                    </>
                  ) : pomoState.running ? (
                    <>
                      <div className="px-5 font-bold text-6xl leading-tight text-gray-800 text-center">
                        <span className="text-red-600">{minuteDisplay()}</span>
                        <span className="text-red-400">:{secondDisplay()}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="px-5 font-bold text-6xl leading-tight text-center">
                        <span className="text-gray-400">25</span>
                        <span className="text-gray-400">:00</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-between px-5 py-3">
                  {manualModeOn ? (
                    <>
                      <Button onClick={saveEntry}>
                        <div className="text-lg font-bold text-red-600">
                          Save
                        </div>
                      </Button>
                    </>
                  ) : pomoState.running ? (
                    <>
                      <Button onClick={donePomo}>
                        <div className="text-lg font-bold text-red-600">
                          Done
                        </div>
                      </Button>
                    </>
                  ) : (
                    <Button onClick={startPomo}>
                      <div className="text-lg font-bold text-red-600">
                        Start
                      </div>
                    </Button>
                  )}
                  <div className="text-center">
                    {pomoState.running ? (
                      <button
                        className="text-red-600 mt-2"
                        onClick={cancelPomo}
                      >
                        Cancel
                      </button>
                    ) : manualModeOn ? (
                      <button
                        className="text-red-600 mt-2"
                        onClick={toggleManualMode}
                      >
                        Cancel
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </CardSimple>
            </div>
            <div className="mt-6">
              <CardSimple className="mt-6">
                <CardTitle>
                  <div className="font-bold text-lg">Today</div>
                </CardTitle>

                <div className="bg-gray-100 rounded-b-md">
                  <ListItems items={state.items} />
                </div>
              </CardSimple>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:w-2/3 lg:pl-6">
            <CardSimple>
              <CardTitle>
                <div className="font-bold text-lg">#tagname</div>
              </CardTitle>
              <div className="bg-gray-100 rounded-b-md">
                <ListItems items={state.items} />
              </div>
            </CardSimple>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PomoTagPage;

function CardSimple({ children }) {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-400">
      {children}
    </div>
  );
}

function CardTitle({ children }) {
  return (
    <div className="flex px-5 py-3 border-b border-gray-400 text-gray-700 items-center justify-between">
      {children}
    </div>
  );
}

function Button({ type, children, onClick }) {
  return (
    <button
      className="px-6 py-1 relative rounded-md bg-white border border-red-600 border-b-4 text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ListItems({ items }) {
  return items.map((item, index) => (
    <div key={index} className="border-b border-gray-300 pr-6 ml-6">
      <div className="border-t-2 border-white flex py-3">
        <span className="w-4/6">{item.name}</span>
        <span className="w-2/6 text-gray-500 text-right">
          {item.datetimeStarted}
        </span>
      </div>
    </div>
  ));
}
