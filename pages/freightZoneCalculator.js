import {
  postcodes,
  freightByZone,
} from "../components/freightZoneCalculatorData";

export default function FreightZoneCalculator() {
  const [state, dispatch] = React.useReducer(reducer, {
    zonesByState: {},
    selectedCarrierState: null,
  });

  React.useEffect(() => {
    postcodes.map((postcode) => {
      const carrierState = postcode.State;
      const carrierZone = postcode.CarrierZone;

      state.zonesByState[carrierState] = state.zonesByState[carrierState] || {};
      state.zonesByState[carrierState][carrierZone] =
        state.zonesByState[carrierState][carrierZone] || [];

      const existingPostcodes = state.zonesByState[carrierState][carrierZone];

      if (existingPostcodes.indexOf(postcode.Postcode) === -1) {
        existingPostcodes.push(postcode.Postcode);
      }

      dispatch({
        type: "addZoneByState",
        payload: {
          carrierState,
          carrierZone,
          existingPostcodes,
        },
      });
    });
  }, []);

  function selectCarrierState() {
    return (event) => {
      event.preventDefault();

      dispatch({
        type: "selectCarrierState",
        payload: {
          selectedCarrierState: event.target.value,
        },
      });
    };
  }

  function carrierStatesAfterFilter() {
    if (!state.selectedCarrierState || state.selectedCarrierState === "All") {
      return Object.keys(state.zonesByState);
    }

    return Object.keys(state.zonesByState).filter(
      (carrierState) => carrierState === state.selectedCarrierState
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="py-6 px-6 lg:px-12 border-b-2 border-gray-800">
        <h1 className="text-xl lg:text-3xl font-bold text-gray-700">
          Freight Zone Calculator
        </h1>
      </header>

      <div className="mt-12">
        <div className="px-6 lg:px-12">
          <div className="flex flex-column">
            <div className="w-full px-4 py-4 rounded bg-gray-800">
              <div className="flex flex-row flex-wrap items-center">
                <div className="mr-2">
                  <div className="uppercase text-xs text-gray-600 tracking-wider mb-2 mr-4">
                    Postcode
                  </div>
                  <input
                    type="search"
                    className="py-2 px-4 h-10 w-40 rounded-md bg-gray-900 text-gray-300"
                    placeholder="Postcode"
                  />
                </div>
                <div className="mr-4">
                  <div className="uppercase text-xs text-gray-600 tracking-wider mb-2">
                    Weight (kg)
                  </div>
                  <input
                    type="number"
                    className="py-2 px-4 h-10 w-24 rounded-md bg-gray-900 text-gray-300"
                    placeholder="Kg"
                  />
                </div>
                <div className="mr-2 text-right flex-1">
                  <div className="uppercase text-xs text-gray-600 tracking-wider mb-2">
                    Freight
                  </div>
                  <div className="text-2xl h-10 text-gray-400 font-bold">
                    $2.3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mb-8">
            <select className="h-12 bg-gray-800 text-gray-300 rounded-lg px-4" onChange={selectCarrierState()}>
              <option value={null}>All states</option>
              {Object.keys(state.zonesByState).map((carrierState) => (
                <option>{carrierState}</option>
              ))}
            </select>
          </div>

          {carrierStatesAfterFilter().map((carrierState) => {
            return (
              <div key={carrierState}>
                <h2 className="text-md inline-block text-gray-600 tracking-wider">
                  {carrierState} (
                  {Object.keys(state.zonesByState[carrierState]).length} zones)
                </h2>
                <div className="py-6 lg:py-12 flex flex-wrap">
                  {Object.keys(state.zonesByState[carrierState]).map(
                    (carrierZone) => (
                      <div key={carrierZone} className="w-full md:w-1/3">
                        <div className="bg-blue-900 md:mr-6 mb-6 flex flex-col shadow-md">
                          <h3 className="text-sm font-bold flex-1 px-4 py-2 text-gray-200">
                            {carrierState} - {carrierZone}
                          </h3>

                          <div className="bg-gray-800 px-4 py-4 flex-1">
                            <div className="flex flex-row flex-wrap">
                              <div className="w-full lg:w-1/4">
                                <div className="mb-2 w-full">
                                  <div className="uppercase tracking-wide text-gray-600 text-xs ">
                                    Basic$
                                  </div>
                                  <div className="text-gray-300 text-xl">
                                    {freightByZone[carrierZone]["Basic"]}
                                  </div>
                                </div>
                                <div className="mb-2 w-full">
                                  <div className="uppercase tracking-wide text-gray-600 text-xs ">
                                    Rate$/kg
                                  </div>
                                  <div className="text-gray-300 text-xl">
                                    {freightByZone[carrierZone]["Rate"]}
                                  </div>
                                </div>
                                <div className="w-full">
                                  <div className="uppercase tracking-wide text-gray-600 text-xs ">
                                    Minimum$
                                  </div>
                                  <div className="text-gray-300 text-xl">
                                    {freightByZone[carrierZone]["Minimum"]}
                                  </div>
                                </div>
                              </div>

                              <div className="w-full lg:w-3/4">
                                <div className="uppercase tracking-wide text-gray-600 text-xs">
                                  Postcodes
                                </div>
                                <div className="text-gray-400">
                                  {state.zonesByState[carrierState][
                                    carrierZone
                                  ].map((postcode) => (
                                    <span
                                      key={postcode}
                                      className="text-xs inline-block mr-2"
                                    >
                                      {postcode}
                                      <br className="inline-block" />
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "addZoneByState":
      return {
        ...state,
        zonesByState: {
          ...state.zonesByState,
          [payload.carrierState]: {
            ...state.zonesByState[payload.carrierState],
            [payload.carrierZone]: payload.existingPostcodes,
          },
        },
      };
    case "selectCarrierState":
      return {
        ...state,
        selectedCarrierState: payload.selectedCarrierState,
      };
    default:
      return {
        ...state,
      };
  }
}
