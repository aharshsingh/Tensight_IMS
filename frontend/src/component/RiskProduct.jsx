import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown';
import RiskChart from './RiskChart';
import axios from 'axios';

export default function CategoryChart() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

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
        <h2 className='mt-6 font-semibold text-xl'>All product which are at out of stock risk</h2>
        <div className='-ml-70 mt-11'>
            <RiskChart selectedCategory={selectedCategory} show={show}/>
        </div>
    </div>
  )
}
