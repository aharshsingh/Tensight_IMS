import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown';
import ProductChart from './ProductChart';
import axios from 'axios';

export default function CategoryChart() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
      const getCategories = async ()=>{
      try{
          const response = await axios.get('http://localhost:7000/getallcategory');
          setCategories(response.data); 
      } catch (error) {
          console.log(error)
      }
      }
      getCategories();
  },[])
    

  return (
    <div>
        <div className='ml-156 mt-6'>
            <Dropdown
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            />
        </div>
        <div className='-ml-60'>
            <ProductChart selectedCategory={selectedCategory} />
        </div>
    </div>
  )
}
