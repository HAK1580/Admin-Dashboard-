import React from 'react'
import { useState } from 'react'
const Notification = ({toggle,setToggle}) => {
  const data=[
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "John Smith",
    sub_title: "Hey, how are you?"
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    title: "Emma Johnson",
    sub_title: "Let's catch up!"
  },
  {
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    title: "Liam Brown",
    sub_title: "Can we talk?"
  },
  {
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    title: "Olivia Davis",
    sub_title: "Meeting at 5?"
  }
]


  return (
 <div>
  <div className={`${toggle?"bg-gray-800  text-white ":"bg-gray-200 text-black"} z-100  notification-box  fixed right-0 min-w-70 rounded-xl  min-h-90`}>
  <div className={`notification-header  w-[90%] mx-auto p-1 flex items-center justify-between  my-4  `}>
    <h1 className='text-xl'>Notifications </h1>
    <div className="new-msgs bg-blue-500 rounded px-2  text-white">
      5 new
    </div>
  </div>
  <div className="chats-box mb-2 p-2  flex flex-col gap-4">
    {data.map((item)=>{
      return (
        
    <div className="img-box  flex gap-2 items-center ">
      <img className='w-16' src={`${item.img}`} alt="" />
      <div className="chat-texts">
        <h1>{item.title}</h1>
        <h1 className='text-gray-500' >{item.sub_title}</h1>
      </div>
    </div>
    

      )
    })}
      <div className="btn flex justify-center mt-5 items-center">
        <button className='bg-blue-400 px-8 rounded py-1 border text-white' >See all Notifications</button>
      </div>
    </div>  

  </div>
 </div>
  )
}

export default Notification