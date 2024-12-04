import React from "react"

const Forecast = ({data}) => {
    return(
        <main>
            {/* Forecast Info */}
            {data.current &&  (<div className="flex flex-col bg-white/25 rounded-2xl justify-center items-start transform scale-[0.9]">
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[1]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8">Tomorrow</h1>
                <p className="text-nowrap">{data.forecast.forecastday[1]?.day.maxtemp_c} / {data.forecast.forecastday[1]?.day.mintemp_c}</p>
            </div>
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[2]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8 text-nowrap">{data.forecast.forecastday[2]?.date}</h1>
                <p className="text-nowrap">{data.forecast.forecastday[2]?.day.maxtemp_c} / {data.forecast.forecastday[2]?.day.mintemp_c}</p>
            </div>
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[3]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8 text-nowrap">{data.forecast.forecastday[3]?.date}</h1>
                <p className="text-nowrap">{data.forecast.forecastday[3]?.day.maxtemp_c} / {data.forecast.forecastday[3]?.day.mintemp_c}</p>
            </div>
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[4]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8 text-nowrap">{data.forecast.forecastday[4]?.date}</h1>
                <p className="text-nowrap">{data.forecast.forecastday[4]?.day.maxtemp_c} / {data.forecast.forecastday[4]?.day.mintemp_c}</p>
            </div>
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[5]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8 text-nowrap">{data.forecast.forecastday[5]?.date}</h1>
                <p className="text-nowrap">{data.forecast.forecastday[5]?.day.maxtemp_c} / {data.forecast.forecastday[5]?.day.mintemp_c}</p>
            </div>
            <div className="flex items-center px-4">
                <img src={data.forecast.forecastday[6]?.day.condition.icon} alt="Forecast Weather Icon" className="pr-8"/>
                <h1 className="text-xl px-8 text-nowrap">{data.forecast.forecastday[6]?.date}</h1>
                <p className="text-nowrap">{data.forecast.forecastday[6]?.day.maxtemp_c} / {data.forecast.forecastday[6]?.day.mintemp_c}</p>
            </div>
            </div>)}
        </main>
    )
}


export default Forecast;