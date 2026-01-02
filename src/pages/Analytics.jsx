import React from 'react'
import { Line } from 'react-chartjs-2'
const Analytics = () => {
  const data={
    labels:["jan","feb","march","apr","aug"],
    datasets:[
      {
      label:"loss",
      data:[100,200,300,400],
      tension:0.5,
      borderWidth:2
      },
      {
      label:"progress",
      data:[50,22,330,440],
      tension:0.5,
      borderWidth:2
      },
    ]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,   // <-- important
  };

  return (
     <div className='sm:w-[85%] h-screen lg:w-[95%]' >
      <h1 className='text-3xl px-6 sm:py-5  lg:hidden ' >Analytics  </h1>
            <div className="add-content-here p-4">
        <h1 className="text-lg text-green-500 text-center">YOUR CONTENT HERE </h1>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem ratione aliquam voluptas reprehenderit maiores. Expedita nemo nulla voluptatibus explicabo in quidem sit labore id amet consequuntur voluptas, similique laborum asperiores nihil quisquam neque assumenda fugit ducimus animi? Eos molestiae ad ab est atque optio consequuntur quis voluptatem iure? Quam!
       </div>
       <div className="chart h-60 m-10 bg-gray-200">
       <Line data={data} options={options    } />

       </div>
       
    </div>
  )
}

export default Analytics