import React from 'react'

const MetricsOverview = () => {
  return (
    <div className='my-10 lg:my-5  '>   
    <div className="metrics-overview ">
    <h1 className=' text-2xl  font-semibold ' >Metrics Overview</h1>
    <div className="stats-cards max-w-full flex justify-evenly gap-4  my-10">
      <div className="card-1 text-xl flex justify-center items-center border h-30 w-[80%] ">
        Stat 1  
      </div>
      <div className="card-2 text-xl flex justify-center items-center border h-30 w-[80%] ">
        Stat 2  
      </div>
      <div className="card-3 text-xl flex justify-center items-center border h-30 w-[80%] ">
        Stat 3  
      </div>

    </div>

    </div>
  

    </div>
  )
}

export default MetricsOverview