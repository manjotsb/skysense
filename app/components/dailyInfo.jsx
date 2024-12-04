import React from "react";
import { LuWind } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";
import { TbSunset2 } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { LuWaves } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";
import { FaThermometerHalf } from "react-icons/fa";

const DailyInfo = ({data}) => {

    const showAqi = (data) => {
        const aqi_index = data.current.air_quality.pm2_5;
        if (aqi_index <= 12.0){
            return { rating: "Good", color: "bg-green-400" };
        }
        else if (aqi_index > 12.0 && aqi_index <=35.4){
            return { rating: "Moderate", color: "bg-yellow-400" };
        }
        else if (aqi_index > 35.4 && aqi_index <=125.4){
            return { rating: "Unhealthy", color: "bg-orange-400" };
        }
        else if (aqi_index > 125.4 && aqi_index <=225.4){
            return { rating: "Dangerous", color: "bg-red-500" };
        }
        else if (aqi_index > 225.4){
            return { rating: "Hazardous", color: "bg-purple-600" };
        }
        else {
            return { rating: "Not Found", color: "bg-gray-400" };
        }
    };
    

    // const aqi = data.current ? showAqi(data) : { rating: "Not Found", color: "bg-gray-400"};
    return(
        <main>
            <div className="flex flex-col justify-center items-center bg-white/25 px-10 rounded-2xl transform scale-[0.9]">
                {data.current && (
                    <main>
                        <h1 className="text-xl py-4 font-medium">Today's Highlights</h1>
                        {/* Upper 2 Boxes  */}
                        <div className="flex justify-between items-center">

                            {/* Air Quality Index  */}
                            <div className="bg-white/25 p-4 rounded-xl mr-5">
                                <div className="flex justify-between">
                                    <h1>
                                        Air Quality Index
                                    </h1>
                                    <h1 className={`${showAqi(data).color} px-3 py-0.5 rounded-3xl`}>
                                        {showAqi(data).rating}
                                    </h1>
                                </div>
                                <div className="flex pt-10">
                                    <LuWind className="mt-2 size-8"/>
                                    <div className="flex flex-col items-center mx-5">
                                        <p className="text-black/50 text-sm">PM 2.5</p>
                                        <p className="text-2xl ">{data.current.air_quality.pm2_5}</p>
                                    </div>
                                    <div className="flex flex-col items-center mx-5">
                                        <p className="text-black/50 text-sm">PM 10</p>
                                        <p className="text-2xl">{data.current.air_quality.pm10}</p>
                                    </div>
                                    <div className="flex flex-col items-center mx-5">
                                        <p className="text-black/50 text-sm">SO2</p>
                                        <p className="text-2xl">{data.current.air_quality.so2}</p>
                                    </div>

                                    <div className="flex flex-col items-center mx-5">
                                        <p className="text-black/50 text-sm">NO2</p>
                                        <p className="text-2xl">{data.current.air_quality.no2}</p>
                                    </div>

                                </div>

                            </div>

                            {/* Sunset And Sunrise  */}
                            <div className="bg-white/25 p-4 rounded-xl">
                                <h1 className="mb-7 mt-1">
                                    Sunrise & Sunset
                                </h1>
                                <div className=" flex p-4 rounded-xl px-auto">
                                    <div className="flex items-center mr-5">
                                        <IoSunnyOutline className="size-8"/>
                                        <p className="text-xl text-nowrap pl-2">{data.forecast.forecastday[0]?.astro.sunrise}</p>
                                    </div>
                                    <div className="flex items-center mr-5">
                                        <TbSunset2 className="size-8"/>
                                        <p className="text-xl text-nowrap pl-2">{data.forecast.forecastday[0]?.astro.sunset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Bottom 4 Boxes  */}
                        <div className="flex  my-6 items-center justify-between">

                            {/* Humidity  */}
                            <div className="bg-white/25 p-4 rounded-xl">
                                <h1>
                                    Humidity
                                </h1>
                                <div className="flex p-2">
                                    <WiHumidity className="size-9 mr-auto"/>
                                    <h1 className="text-xl px-4 py-1.5">
                                        {data.current.humidity}%
                                    </h1>
                                </div>
                            </div>

                            {/* Pressure  */}
                            <div className="bg-white/25 p-4 rounded-xl">
                                <h1>
                                    Pressure
                                </h1>
                                <div className="flex p-2">
                                    <LuWaves className="size-8 mt-1  mr-auto"/>
                                    <h1 className="text-xl px-4 py-1.5">
                                        {data.current.pressure_mb}hPa
                                    </h1>
                                </div>
                            </div>

                            {/* Visibility  */}
                            <div className="bg-white/25 p-4 rounded-xl">
                                <h1>
                                    Visibility
                                </h1>
                                <div className="flex p-2">
                                    <MdVisibility className="size-8 mt-1  mr-auto"/>
                                    <h1 className="text-xl px-4 py-1.5">
                                        {data.current.vis_km} Km
                                    </h1>
                                </div>
                            </div>
                            <div className="bg-white/25 p-4 rounded-xl">
                                <h1>
                                    Feels Like
                                </h1>
                                <div className="flex p-2">
                                    <FaThermometerHalf className="size-8 mt-1  mr-auto"/>
                                    <h1 className="text-nowrap text-xl px-4 py-1.5">
                                        {data.current.feelslike_c} °C
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </main>
                )}
            </div>
        </main>

    );
}

export default DailyInfo;