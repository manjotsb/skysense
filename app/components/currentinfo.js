import React from "react";

const CurrentInfo = ({data}) => {
    return(
        <main className="flex justify-center items-center transform scale-[0.9]">
            {/* Current Info */}
          <div className="flex justify-start">
                {data.current && (
                  <div className="flex flex-col items-center">
                    <h1 className="text-white text-3xl">
                      {data.location.name}
                    </h1>
                    <h1 className="text-white text-sm">
                      ({data.location.country})
                    </h1>
                    <div className="flex">
                      <h1 className="text-white text-9xl">{data.current?.temp_c}</h1>
                      <h1 className="text-white text-9xl">°</h1>
                    <div/>
                  </div>
                    <p className="text-white text-2xl">{data.current.condition.text}</p>
                    <div className="flex text-white items-center justify-center space-x-3 m-2">
                      <p>H: {data.forecast.forecastday[0]?.day.maxtemp_c}</p>
                      <p>/</p>
                      <p>L: {data.forecast.forecastday[0]?.day.mintemp_c}</p>
                    <div/></div>
                  </div>
                )}
            </div>
        </main>
    )
}

export default CurrentInfo;