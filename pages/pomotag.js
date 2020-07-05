import React from "react";
import { useInterval } from "../components/customHooks";
import { getHashTags } from "../components/pureFunctions";

const initialItems = [
  {
    name: "Create PomoTag app for #Koala",
    datetimeStarted: "2 July 2pm",
  },
  {
    name: "Invoice monthly bill for #Koala and #RowmarkAustralia",
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

function reducer(state, { type, payload }) {
  switch (type) {
    case "toggleManualMode":
      return {
        ...state,
        manualModeOn: !state.manualModeOn,
      };
    case "startPomo":
      return {
        ...state,
        running: true,
        remainingSeconds: 1500,
      };
    case "cancelPomo":
      return {
        ...state,
        running: false,
      };
    case "stopPomo":
      return {
        ...state,
        running: false,
      };
    case "changeEntry":
      return {
        ...state,
        newEntry: payload,
      };
    case "countdownPomo":
      return {
        ...state,
        remainingSeconds: payload.remainingSeconds,
      };
    default:
      return state;
  }
}

function PomoTagPage() {
  const [state, dispatch] = React.useReducer(reducer, {
    manualModeOn: false,
    newEntry: "",
    items: initialItems,
    running: false,
    remainingSeconds: 1500,
  });

  function toggleManualMode(event) {
    event.preventDefault();
    dispatch({ type: "toggleManualMode" });
  }

  function startPomo(event) {
    event.preventDefault();
    dispatch({ type: "startPomo" });
  }

  function cancelPomo(event) {
    event.preventDefault();
    dispatch({ type: "cancelPomo" });
  }

  function stopPomo(event) {
    event.preventDefault();
    dispatch({ type: "stopPomo" });
  }

  function changeEntry(event) {
    event.persist();
    dispatch({
      type: "changeEntry",
      payload: event.target.value,
    });
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

  const minuteDisplay = () => Math.floor(state.remainingSeconds / 60);
  const secondDisplay = () => {
    const mod = Math.floor(state.remainingSeconds % 60);
    return mod < 10 ? `0${mod}` : mod;
  };

  useInterval(
    () => {
      if (state.remainingSeconds === 0) {
        dispatch({
          type: "stopPomo",
        });
      } else {
        dispatch({
          type: "countdownPomo",
          payload: {
            remainingSeconds: state.remainingSeconds - 1,
          },
        });
      }
    },
    state && state.running ? 1000 : 0
  );

  function itemsByFirstTag() {
    const itemsByFirstTag = {};

    state.items.map((item) => {
      const hashTags = getHashTags(item.name) || [];
      const firstTag = hashTags[0];
      const tag = firstTag || "notag";
      itemsByFirstTag[tag] = itemsByFirstTag[tag] || {};
      const currenItems = itemsByFirstTag[tag].items || [];
      currenItems.push(item);
      itemsByFirstTag[tag] = {
        ...itemsByFirstTag[tag],
        tag,
        items: currenItems,
        latestItem: item,
      };
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
        <div className=" max-w-full flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/3">
            <div className="">
              <CardSimple>
                <CardTitle>
                  <div className="font-bold text-md">
                    {state.manualModeOn ? `Manual` : `Pomodoro`}
                  </div>
                </CardTitle>

                <div className="bg-gray-100 border-b border-gray-400 h-24 flex flex-col justify-center">
                  {state.manualModeOn ? (
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
                  ) : state.running ? (
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
                  {state.manualModeOn ? (
                    <>
                      <Button onClick={saveEntry}>
                        <div className="text-lg font-bold text-red-600">
                          Save
                        </div>
                      </Button>
                      <button
                        className="text-red-600"
                        onClick={toggleManualMode}
                      >
                        Cancel
                      </button>
                    </>
                  ) : state.running ? (
                    <>
                      <Button onClick={stopPomo}>
                        <div className="text-lg font-bold text-red-600">
                          Stop
                        </div>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={startPomo}>
                        <div className="text-lg font-bold text-red-600">
                          Start
                        </div>
                      </Button>
                      {!state.manualModeOn ? (
                        <button
                          className="text-red-600"
                          onClick={toggleManualMode}
                        >
                          {`Manual`}
                        </button>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>
              </CardSimple>
            </div>
            <div className="mt-6">
              <CardSimple className="mt-6">
                <CardTitle>
                  <div className="font-bold text-md">Today</div>
                </CardTitle>

                <div className="bg-gray-100 rounded-b-md">
                  <ListTags itemsByFirstTag={itemsByFirstTag(state.items)} />
                </div>
              </CardSimple>
            </div>
          </div>
          <div className="w-full mt-6 lg:mt-0 lg:w-2/3 lg:pl-6">
            <CardSimple>
              <input
                className="bg-white w-full px-5 py-3 border-b border-gray-400 rounded-t-md"
                placeholder="Search"
              />
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
      <div className="text-sm lg:text-base border-t-2 border-white flex py-3">
        <span className="w-4/6 lg:w-5/6">{item.name}</span>
        <span className="w-2/6 lg:w-1/6 text-gray-500 text-right">
          {item.datetimeStarted}
        </span>
      </div>
    </div>
  ));
}

function ListTags({ itemsByFirstTag }) {
  return Object.keys(itemsByFirstTag).map((index) => {
    const tag = itemsByFirstTag[index];
    return (
      <div key={index} className="border-b border-gray-300 pr-6 ml-6">
        <div className="text-sm lg:text-base border-t-2 border-white flex py-3">
          <span className="w-4/6">#{tag.tag}</span>
          <span className="w-2/6 text-gray-500 text-right">
            {(tag.items.length * 30) / 60} h
          </span>
        </div>
      </div>
    );
  });
}
