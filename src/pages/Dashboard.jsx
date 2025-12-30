import React from 'react'
import SalesChart from '../components/SalesChart'
import RecentActivity from '../components/RecentActivity'
import MetricsOverview from '../components/MetricsOverview'
const Dashboard = () => {
  return (
    <div  className='sm:w-[85%] mb-42    min-h-screen lg:w-[95%]' >
      <h1 className='text-3xl px-6 sm:py-5 font-semi  bold  lg:hidden ' > Dashboard  </h1>
     <div className="dashboard  mx-5">
      <MetricsOverview />
      <SalesChart />
      <RecentActivity />
      

     </div>
    </div>
  )
}

export default Dashboard