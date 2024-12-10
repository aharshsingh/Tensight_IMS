import React from 'react'
import NavBar from '../component/NavBar'
import LottieAnimation from '../component/Animation'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className='flex gap-72'>
        <div className='ml-20'>
          <LottieAnimation/>
        </div>
      
      <div className='mt-40'>
      <p className='text-8xl font-semibold -ml-96'>Efficient.</p>
      <p className='text-8xl font-semibold ml-3'>Reliable. Scalable.</p>
      <p className='mt-6 text-lg -ml-40'>"Streamline today, succeed tomorrow – smart inventory, smarter business."</p>
      <Link to='/dashboard'><button className="mt-6 -ml-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button></Link>
      </div>
      </div>
    </div>
  )
}
