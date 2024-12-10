import React from 'react'
import NavBar from '../component/NavBar'
import AddCategory from '../component/AddCategory'
import SideNav from '../component/SideNav'

export default function Dashboard() {
  return (
    <div className="bg-[#2C9B8E] min-h-screen">
      <NavBar/>
      <div className='flex justify-start'>
        <SideNav/>
        <div className="w-156 h-128 bg-white bg-opacity-35 backdrop-blur-md mt-20 ml-10 mr-10 shadow-lg rounded-lg border border-white border-opacity-30">
          <AddCategory/>
        </div>
      </div>
    </div>
  )
}
