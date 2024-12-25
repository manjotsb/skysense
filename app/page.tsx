'use client';
import React, { use, useState } from "react";
import Input from "./components/input";
import Forecast from './components/forecast'
import DailyInfo from './components/dailyInfo'
import CurrentInfo from './components/currentinfo'
import { IoSettingsOutline } from "react-icons/io5";
import SettingsPopup from './components/settingsPopup'
import HourlyForecast from './components/hourlyForecast'
import HorizontallyScrollable from './components/horizontallyScrollable'


export default function Home() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [openSettings, setOpenSettings] = useState(false);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=9&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation('');
        setError('');
      } catch (error) {
        setError('City Not Found!!');
        setData({});
      }
    }
  };

  const getBackground =(condition: string) => {
    const conditionMapping: Record<string, string> = {
      sunny: 'bg-sunnyImg',
      clear: 'bg-dayImg',
      cloudy: 'bg-cloudyImg',
      overcast: 'bg-cloudyImg',
      rain: 'bg-rainImg',
      drizzle: 'bg-rainImg',
      snow: 'bg-snowImg',
      sleet: 'bg-snowImg',
      thunder: 'bg-thunderStormImg',
      storm: 'bg-thunderStormImg',
      default: 'bg-defaultImg',
    };

    const normalizeCondition = condition.toLowerCase();
    for (const [key, value] of Object.entries(conditionMapping)){
      if (normalizeCondition.includes(key)){
        return value;
      }
    }
    return 'bg-defaultImg';
  };


  const weatherCondition = data.current?.condition?.text || 'default';

  const handleSettingsClick = () => {
    setOpenSettings((prevVal) => !prevVal);
  };

  return (
    <main className={`flex ${getBackground(weatherCondition)} relative bg-no-repeat bg-cover flex-col h-fit min-h-screen`}>
      {/* BackGround Gradient */}
      <div className={`flex bg-blackOverlay bg-no-repeat bg-cover flex-col h-fit min-h-screen relative`}>

          {/* Input and Logo */}
          <div className="flex flex-col md:flex-row justify-between bg-black/25 items-center px-12 py-8 mb-4">
            <Input handleSearch={handleSearch} setLocation={setLocation}/>
            <IoSettingsOutline className="order-1 size-8 text-white" onClick={handleSettingsClick}/>
          </div>
          {/* Settings Popup  */}
          {openSettings && (
              <div className="absolute right-5 top-28 z-50">
                <SettingsPopup/>
              </div>
          )}

          <div className="flex justify-between mx-10">
            <div className="flex flex-col justify-center items-center">
              <CurrentInfo data={data}/>
              <Forecast data={data}/>
            </div>

            <div className="flex flex-col ml-[150px] overflow-hidden">
              <DailyInfo data={data}/>
              <div className="w-full overflow-hidden my-10">
                {data.current && (
                  <h1 className="text-xl mx-2 text-white font-medium">Today At</h1>
                )}
                <HorizontallyScrollable className="py-4">
                  <HourlyForecast data={data}/>
                </HorizontallyScrollable>
            </div>
            </div>
          </div>
      </div>

    </main>
  );
}
