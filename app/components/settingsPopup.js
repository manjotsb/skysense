import React, { useState } from "react";

const SettingsPopup = () => {
  // Local state for selected units
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] = useState("C"); // Default: Celsius
  const [selectedSpeedUnit, setSelectedSpeedUnit] = useState("Km/h"); // Default: Km/h

  return (
    <div className="flex flex-col text-white bg-black p-4 rounded-lg z-50">
      <h3 className="flex justify-center text-xl font-medium">Preferences</h3>

      {/* Temperature Units */}
      <h3 className="flex justify-start text-sm pt-4">Temperature Units</h3>
      <div className="flex justify-start py-2 font-semibold">
        <button
          className={`border p-2 rounded-lg mr-2 ${
            selectedTemperatureUnit === "C" ? "bg-white text-black" : ""
          }`}
          onClick={() => setSelectedTemperatureUnit("C")}
        >
          Celsius
        </button>
        <button
          className={`border p-2 rounded-lg ${
            selectedTemperatureUnit === "F" ? "bg-white text-black" : ""
          }`}
          onClick={() => setSelectedTemperatureUnit("F")}
        >
          Fahrenheit
        </button>
      </div>

      {/* Speed Units */}
      <h3 className="flex justify-start text-sm pt-4">Speed Units</h3>
      <div className="flex justify-start py-2 font-semibold">
        <button
          className={`border p-2 rounded-lg ${
            selectedSpeedUnit === "Km/h" ? "bg-white text-black" : ""
          }`}
          onClick={() => setSelectedSpeedUnit("Km/h")}
        >
          Km/h
        </button>
        <button
          className={`border p-2 rounded-lg mx-2 ${
            selectedSpeedUnit === "Mph" ? "bg-white text-black" : ""
          }`}
          onClick={() => setSelectedSpeedUnit("Mph")}
        >
          Mph
        </button>
      </div>
    </div>
  );
};

export default SettingsPopup;
