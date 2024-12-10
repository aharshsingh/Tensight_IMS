import React from 'react'
import ArrowSVG from '../component/ArrowSVG'
import {Link} from 'react-router-dom'

export default function SideNav() {
  return (
    <div>
      <div className="w-80 h-128 bg-white bg-opacity-35 backdrop-blur-md mt-20 ml-10 shadow-lg rounded-lg border border-white border-opacity-30">
          <ul>
            <li className="flex items-center mt-6 ml-3">
              <ArrowSVG/>
              <Link to='/dashboard'>
                <p className="ml-2 text-base text-gray-800 dark:text-slate-950">Products</p>
              </Link>
            </li>
            <li className="flex items-center mt-6 ml-3">
              <ArrowSVG/>
              <Link to='/dashboard/riskproduct'>
                <p className="ml-2 text-base text-gray-800 dark:text-slate-950">Top Products at Risk of Stock Out</p>
              </Link>
            </li>
            <li className="flex items-center mt-6 ml-3">
              <ArrowSVG/>
              <Link to='/dashboard/addstock'>
                <p className="ml-2 text-base text-gray-800 dark:text-slate-950">Add Stocks</p>
              </Link>
            </li>
            <li className="flex items-center mt-6 ml-3">
              <ArrowSVG/>
              <Link to='/dashboard/addProduct'>
              <p className="ml-2 text-base text-gray-800 dark:text-slate-950">Add Product</p>
              </Link>
            </li>
            <li className="flex items-center mt-6 ml-3">
              <ArrowSVG/>
              <Link to='/dashboard/addCategory'>
                <p className="ml-2 text-base text-gray-800 dark:text-slate-950">Add Category</p>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}
