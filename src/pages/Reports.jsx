import React from 'react'
import { Pie,Bar} from 'react-chartjs-2'
import "chart.js/auto"
import { data } from 'react-router-dom'
const Reports = () => {

  const piedata={
    labels:["mobile","tablets","Pc/Laptops"],
    datasets:[
      {data:[200,150,50],}
    ]
  }
const bardata={
  labels:["sales","profit","loss","margin"],
  datasets:[
   {data:[150,20,220,350]}
  ]
}

  return (
    <div className='sm:w-[85%] h-screen lg:w-[95%]' >
      <h1 className='text-3xl px-6 sm:py-5  lg:hidden ' >Reports  </h1>
            <div className="add-content-here p-4">
              <div className="chart my-6 rounded p-2   h-65">
               <Pie data={piedata} />
              </div>
              <div className="chart my-14 bg-gray-200 rounded    h-65">
               <Bar data={bardata} />
              </div>
      </div>
    </div>
  )
}

export default Reports