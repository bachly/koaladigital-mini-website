import React from "react";
import { useInterval } from "../components/customHooks";
import { getHashTags } from "../components/pureFunctions";
import { format } from "date-fns";

const initialItems = [
  {
    name: "Create PomoTag app for #Koala",
    datetimeCreated: new Date("2020-07-01"),
    accumulatedSeconds: 1500,
  },
  {
    name: "Invoice monthly bill for #Koala and #RowmarkAustralia",
    datetimeCreated: new Date("2020-07-01"),
    accumulatedSeconds: 500,
  },
  {
    name: "Work on the Payment screens for #RemoteCheckPayment",
    datetimeCreated: new Date("2020-07-01"),
    accumulatedSeconds: 1500,
  },
  {
    name: "Turn on TroPro 2020 Week 4 for #RowmarkAustralia",
    datetimeCreated: new Date("2020-07-01"),
    accumulatedSeconds: 1500,
  },
];

const INITIAL_POMO_SECONDS = 1500;
const BREAK_POMO_SECONDS = 300;
const FULL_POMO_SECONDS = 1800;

function reducer(state, { type, payload }) {
  switch (type) {
    case "startPomo":
      return {
        ...state,
        running: true,
        remainingSeconds: INITIAL_POMO_SECONDS,
      };
    case "cancelPomo":
      return {
        ...state,
        running: false,
        manualModeOn: false,
      };
    case "stopPomo":
      return {
        ...state,
        running: false,
        manualModeOn: true,
        newEntrySeconds: accumMinutes(state.remainingSeconds) * 60,
      };
    case "startBreak":
      return {
        ...state,
        running: true,
        remainingSeconds: BREAK_POMO_SECONDS,
        breakModeOn: true,
      };
    case "endPomo":
      return {
        ...state,
        running: false,
        breakModeOn: false,
        manualModeOn: true,
        newEntrySeconds: FULL_POMO_SECONDS,
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
    case "saveEntry":
      const updatedItems = state.items;
      const name =
        state.newEntry === "" ? "Something #awesome" : state.newEntry;
      updatedItems.push({
        name,
        datetimeCreated: new Date(),
        accumulatedSeconds: newEntrySeconds,
      });

      return {
        ...state,
        items: updatedItems,
        newEntry: "",
        manualModeOn: false,
      };
    default:
      return state;
  }
}

function PomoTagPage() {
  const [state, dispatch] = React.useReducer(reducer, {
    manualModeOn: false,
    breakModeOn: false,
    newEntry: "",
    newEntrySeconds: "",
    items: initialItems,
    running: false,
    remainingSeconds: INITIAL_POMO_SECONDS,
  });

  function startPomo(event) {
    event.preventDefault();
    dispatch({ type: "startPomo", remainingSeconds: INITIAL_POMO_SECONDS });
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
    dispatch({
      type: "saveEntry",
    });
  }

  const minuteDisplay = () => Math.floor(state.remainingSeconds / 60);
  const secondDisplay = () => {
    const mod = Math.floor(state.remainingSeconds % 60);
    return mod < 10 ? `0${mod}` : mod;
  };

  useInterval(
    () => {
      if (state.remainingSeconds > 0) {
        dispatch({
          type: "countdownPomo",
          payload: {
            remainingSeconds: state.remainingSeconds - 1,
          },
        });
      } else {
        if (!breakModeOn) {
          dispatch({
            type: "startBreak",
          });
        } else {
          dispatch({
            type: "endPomo",
          });
        }
      }
    },
    state && state.running ? 1000 : null
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
    <div className="bg-gray-800">
      <div className="max-w-6xl min-h-screen bg-gray-200">
        <header
          className="px-1 py-3 bg-white shadow-sm h-10 lg:h-24 flex items-center"
          style={{ marginBottom: "-2.5rem" }}
        ></header>
        <main className="py-3 lg:px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/3">
              <div className="px-6 lg:px-1">
                <CardSimple>
                  <div className="border-b border-gray-400">
                    <div className="flex justify-between items-center">
                      <div className="px-5 font-bold text-2xl leading-tight text-center">
                        {state.running ? (
                          <>
                            <span className="text-red-600">
                              {minuteDisplay()}
                            </span>
                            <span className="text-red-400">
                              :{secondDisplay()}
                            </span>
                          </>
                        ) : state.manualModeOn ? (
                          <>
                            <span className="text-gray-500">
                              {accumMinutes(state.remainingSeconds)}
                            </span>
                            <span className="text-gray-400"> min</span>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-500">25</span>
                            <span className="text-gray-400">:00</span>
                          </>
                        )}
                      </div>

                      <div className="px-5 py-3">
                        {state.running ? (
                          <>
                            <button
                              id="StopPomo"
                              className="rounded-md border border-b-4 border-red-800 bg-red-600 text-white px-5 py-1"
                              onClick={stopPomo}
                            >
                              Stop
                            </button>
                          </>
                        ) : state.manualModeOn ? (
                          <>
                            <button
                              id="CancelPomo"
                              className="rounded-md text-gray-600 px-2 py-1 mr-2"
                              onClick={cancelPomo}
                            >
                              Cancel
                            </button>
                            <button
                              id="SavePomo"
                              className="rounded-md border border-b-4 border-green-800 text-white bg-green-600 px-4 py-1"
                              onClick={saveEntry}
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              id="StartPomo"
                              className="rounded-md border border-b-4 border-red-600 text-red-600 px-4 py-1"
                              onClick={startPomo}
                            >
                              Start
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    {state.manualModeOn ? (
                      <>
                        <div className="h-full flex-1">
                          <textarea
                            className="px-5 w-full h-full py-2 text-lg bg-gray-200"
                            placeholder="What have you just done?"
                            value={state.newEntry}
                            onChange={changeEntry}
                          ></textarea>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </CardSimple>
              </div>
              <div className="mt-5 px-1">
                <div className="px-6 mb-2 font-bold text-sm uppercase tracking-wide text-gray-500">
                  Today
                </div>

                <CardSimple>
                  <ListTags itemsByFirstTag={itemsByFirstTag(state.items)} />
                </CardSimple>
              </div>
            </div>
            <div className="w-full mt-5 lg:mt-0 lg:w-2/3 lg:pl-6 px-1">
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
    </div>
  );
}

export default PomoTagPage;

function CardSimple({ children }) {
  return (
    <div className="bg-white rounded-lg border border-b-2 border-gray-400">
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
      <div className="text-sm lg:text-base border-t-2 border-white flex pt-2">
        <span className="w-4/6 lg:w-5/6">{item.name}</span>
        <span className="w-2/6 lg:w-1/6 text-gray-500 text-right">
          {Math.floor(item.accumulatedSeconds / 60)}:
          {doubleDigit(item.accumulatedSeconds % 60)}
        </span>
      </div>
      <div className="text-sm lg:text-base text-gray-600 pb-2">
        {format(item.datetimeCreated, "d MMM Y H:ii")}
      </div>
    </div>
  ));
}

function ListTags({ itemsByFirstTag }) {
  return Object.keys(itemsByFirstTag).map((index) => {
    const tag = itemsByFirstTag[index];
    return (
      <div key={index} className="border-b border-gray-300 pr-6 ml-6">
        <div className="border-t-2 border-white flex py-3">
          <span className="w-4/6">#{tag.tag}</span>
          <span className="w-2/6 text-gray-500 text-right">
            {`x ${tag.items.length}`}
          </span>
        </div>
      </div>
    );
  });
}

function doubleDigit(number) {
  return number < 10 ? `0${number}` : number;
}

function accumMinutes(remainingSeconds) {
  const minutes = Math.floor((INITIAL_POMO_SECONDS - remainingSeconds) / 60);
  if (minutes < 5) return 5;
  if (minutes < 10) return 10;
  if (minutes < 20) return 20;
  if (minutes < 25) return 25;
  return minutes;
}
