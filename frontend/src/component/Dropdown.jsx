import React from 'react'

export default function Dropdown({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div>
    <select className='bg-blue-800 text-white w-48 h-10 rounded-lg p-2 shadow-2xl hover:bg-blue-600' onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
    <option className="bg-gray-900 text-white" value="">
            Select Category
          </option>
      {categories.map((category) => (
        <option className="bg-gray-900 text-white" key={category._id} value={category.categoryName}>
          {category.categoryName}
        </option>
      ))}
    </select>
    </div>
  )
}
