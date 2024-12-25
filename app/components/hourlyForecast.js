import React from "react";

const HourlyForecast = ({data}) => {
    return (
        <main className="text-white">
            {data.current && (
                <div className="flex">
                    {data.forecast.forecastday[0]?.hour.slice(0,24).map((hour) => (
                        <div key={hour.time}>
                            <div className="flex items-center">
                                <div className="flex flex-col items-center justify-center bg-black/50 p-6 rounded-xl mx-2 min-x-[80px] h-[180px]">
                                    <p className="text-xl py-2">{hour.time.slice(10,16)}</p>
                                    <img src={hour.condition.icon} alt="Hourly Forecast Icon" className="size-32"/>
                                    <p className="text-xl py-2">
                                        {hour.temp_c}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default HourlyForecast;
