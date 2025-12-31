import React from 'react'
import { useState } from 'react'
const Notification = ({toggle,setToggle}) => {

  return (
    <div className={`h-50 lg:h-70 z-100  transition-all ${toggle?"bg-gray-300 ":"bg-white"}  fixed right-0 flex justify-center items-center max-w-full rounded bg-[#fffffff6] `}  >
       
       <h1 className={`text-red-500 text-xl p-2   `}  >No notifications to show  </h1>
    </div>
  )
}

export default Notification