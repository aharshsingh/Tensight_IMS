import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function AddProduct() {
    const[category, setCategory] = useState('');
    const[categories, setCategories] = useState([]);
    const[productName, setProductName] = useState('');
    const[stockLevel, setStockLevel] = useState('');
    const[reorderLevel, setReorderLevel] = useState('');

    const handleFormSub = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:7000/addInventory',{
                productName,
                stockLevel,
                reorderLevel,
                category
            })
            if(response.status !== 200){
                console.log(response.error);
            }else{
              alert(`Product added to ${category}`)
            }
        } catch (error) {
            console.log(error);
        }  
    }

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
        <div> 
            <p className='text-lg font-semibold mt-6'>Enter the details of the product</p>
        </div>
<form class="max-w-md mx-auto mt-16" onSubmit={handleFormSub}>
<div class="relative z-0 w-full mb-5 group">
  <input onChange={(e)=> setProductName(e.target.value)} value={productName} type="text" name="product_name" id="floating_product_name" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
  <label for="floating_product_name" class="absolute text-base text-gray-500 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-600 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">Product Name</label>
</div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setStockLevel(e.target.value)} value={stockLevel} type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="absolute text-base text-gray-500 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-600 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">Stock Level</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input onChange={(e)=> setReorderLevel(e.target.value)} value={reorderLevel} type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="absolute text-base text-gray-500 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-600 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">Reorder Level</label>
  </div>
  <div>
  <select className='bg-blue-800 text-white w-48 h-10 rounded-lg p-2 shadow-2xl hover:bg-blue-600' onChange={(e) => setCategory(e.target.value)} value={category}>
        <option className="bg-gray-900 text-white" value="" disabled>
            Select a category
        </option> 
      {categories.map((category) => (
        <option className="bg-gray-900 text-white" key={category._id} value={category.categoryName}>
          {category.categoryName}
        </option>
      ))}
    </select>
    </div>
  <button type="submit" class="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}
