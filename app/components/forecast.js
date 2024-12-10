import React from "react"

const Forecast = ({data}) => {

    const getDayName = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {weekday:'long'}).slice(0,3);
    }

    return(
        <main className="text-white">
        {/* Forecast Info */}
        {data.current && (
          <div className="flex px-4 min-w-[380px] py-2 flex-col bg-black/25 rounded-2xl items-start transform scale-[0.9]">
            {data.forecast.forecastday.slice(2,9).map((day, index) => (
              <div className="flex items-center" key={index}>
                <img
                  src={day.day.condition.icon}
                  alt="Forecast Weather Icon"
                  className="px-8"
                />
                <h1 className="text-xl text-nowrap px-8">{getDayName(day.date)}</h1>
                <p className="flex text-nowrap justify-start items-center px-8">
                    {day.day.avgtemp_c}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    )
}


export default Forecast;