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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700">
        <div className="py-6 max-w-6xl mx-auto">
          <h1 className="text-xl lg:text-xl font-bold text-gray-100">
            Freight Zone Calculator
          </h1>
        </div>
      </header>

      <div className="h-32 bg-blue-700">
        <div className="py-6 max-w-6xl mx-auto">
          <div className="flex flex-row">
            <div className="w-2/5 pr-4">
              <Calculator zonesByState={state.zonesByState} />
            </div>

            <main className="w-3/5 pl-4">
              <div
                id="zones"
                className="border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <div
                  id="filters"
                  className="px-8 py-4 border-b-2 border-gray-200"
                >
                  <select
                    className="h-12 text-gray-900 bg-gray-300 rounded-lg px-4"
                    onChange={selectCarrierState()}
                  >
                    <option value={"All"}>All states</option>
                    {Object.keys(state.zonesByState).map((carrierState) => (
                      <option>{carrierState}</option>
                    ))}
                  </select>
                </div>

                {carrierStatesAfterFilter().map((carrierState) => {
                  return (
                    <div className="carrier-state mb-6" key={carrierState}>
                      <h2 className="px-8 py-6 text-xl text-gray-800 font-bold">
                        {carrierState} (
                        {Object.keys(state.zonesByState[carrierState]).length}{" "}
                        zones)
                      </h2>
                      <div className="flex flex-wrap">
                        {Object.keys(state.zonesByState[carrierState]).map(
                          (carrierZone) => (
                            <div key={carrierZone} className="w-full">
                              <div className="flex flex-col">
                                <h3 className="text-sm font-bold flex-1 px-8 py-2 text-gray-600 bg-gray-300">
                                  {carrierState} - {carrierZone}
                                </h3>

                                <div className="bg-gray-100 px-8 py-6 flex-1 border-b border-gray-200">
                                  <div className="flex flex-column flex-wrap">
                                    <div
                                      id="freight-costs"
                                      className="w-full flex flex-row mb-2"
                                    >
                                      <div className="mb-2 w-full lg:w-1/3">
                                        <div className="uppercase tracking-wide text-gray-500 text-xs font-bold">
                                          Basic$
                                        </div>
                                        <div className="text-gray-900 text-xl">
                                          {freightByZone[carrierZone]["Basic"]}
                                        </div>
                                      </div>
                                      <div className="mb-2 w-full lg:w-1/3">
                                        <div className="uppercase tracking-wide text-gray-500 text-xs font-bold">
                                          Rate$/kg
                                        </div>
                                        <div className="text-gray-900 text-xl">
                                          {freightByZone[carrierZone][
                                            "Rate"
                                          ].toFixed(2)}
                                        </div>
                                      </div>
                                      <div className="mb-2 w-full lg:w-1/3">
                                        <div className="uppercase tracking-wide text-gray-500 text-xs font-bold">
                                          Minimum$
                                        </div>
                                        <div className="text-gray-900 text-xl">
                                          {
                                            freightByZone[carrierZone][
                                              "Minimum"
                                            ]
                                          }
                                        </div>
                                      </div>
                                    </div>

                                    <div
                                      id="postcodes"
                                      className="w-full lg:w-3/4"
                                    >
                                      <div className="uppercase tracking-wide text-gray-500 text-xs font-bold">
                                        Postcodes (
                                        {
                                          state.zonesByState[carrierState][
                                            carrierZone
                                          ].length
                                        }
                                        )
                                      </div>
                                      <div className="text-gray-900">
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
            </main>
          </div>
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

function Calculator({ zonesByState }) {
  const [state, setState] = React.useState({
    postcode: null,
    weight: null,
    fuelLevyPercentage: 15,
    markupPercentage: 15,
    taxPercentage: 10,
  });

  function change(fieldname) {
    return (event) => {
      event.preventDefault();
    };
  }

  return (
    <div
      id="calculator"
      className="w-full px-6 py-5 bg-white border rounded-lg border-gray-200 shadow-md"
    >
      <p className="text-md text-gray-700 mb-6">
        Enter the Postcode and Weight, the freight will be automatically
        calculated. Adjust add-ons if neccessary
      </p>

      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 pr-2">
          <InputField label="Postcode" onChange={change("postcode")} />
        </div>
        <div className="w-1/2 pl-2">
          <InputField label="Weight (kg)" onChange={change("weight")} />
        </div>
      </div>

      <div className="my-6"></div>

      <div className="">
        <div className="text-gray-700 text-sm font-bold uppercase">Add-ons</div>
      </div>

      {state.showAddons ? (
        <>
          <div className="mt-4 flex">
            <div className="w-1/3 pr-2">
              <InputField
                label="Fuel levy %"
                value={state.fuelLevyPercentage}
                onChange={change("fuelLevyPercentage")}
              />
            </div>
            <div className="w-1/3 pl-2 pr-2">
              <InputField
                label="Markup %"
                value={state.markupPercentage}
                onChange={change("markupPercentage")}
              />
            </div>
            <div className="w-1/3 pl-2">
              <InputField
                label="Tax %"
                value={state.taxPercentage}
                onChange={change("taxPercentage")}
              />
            </div>
          </div>

          <div className="my-6 border-t border-white">
            <div className="border-b border-gray-200"></div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-700 text-sm font-bold uppercase">
            Total freight
          </div>
          <div className="text-3xl text-blue-700 font-bold">$2.3</div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, value, onChange }) {
  return (
    <div className="input-field">
      <div className="uppercase text-xs text-gray-700 font-bold tracking-wider mb-2">
        {label}
      </div>
      <input
        type="input"
        className="py-2 px-4 h-10 w-full rounded-sm bg-white border border-gray-300 text-gray-900"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
}
