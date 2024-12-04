'use client';
import React, { useState } from "react";
import Input from "./components/input";
import Forecast from './components/forecast'
import DailyInfo from './components/dailyInfo'
import CurrentInfo from './components/currentinfo'
import getBackground from "./utils/dynamicBackgound";
import { Condiment } from "next/font/google";

export default function Home() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

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

  return (
    <main>
      {/* BackGround Gradient */}
      <div className={`flex ${getBackground(weatherCondition)} bg-no-repeat bg-cover flex-col h-fit min-h-screen relative`}>
          <div className="flex flex-col md:flex-row justify-between items-center p-12">

            {/* Input and Logo */}
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 text-2xl italic font-bold">
              SkySense
            </h1>
          </div>

          <div className="flex justify-between mx-10">
            <div className="flex flex-col justify-center items-center">
              <CurrentInfo data={data}/>
              <Forecast data={data}/>
            </div>

            <div>
              <DailyInfo data={data}/>
          </div>
        </div>
      </div>

    </main>
  );
}
