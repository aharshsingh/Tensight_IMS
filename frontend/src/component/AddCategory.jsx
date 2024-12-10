import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function AddProduct() {
    const[categoryName, setCategoryName] = useState('');

    const handleFormSub = async (e)=>{
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:7000/addCategory',{
                categoryName
            })
            if(response.status !== 200){
                console.log(response.error);
            }else{
                alert(`${categoryName} added to Categories`)
            }
        } catch (error) {
            console.log(error);
        }  
    }

  return (
    <div>
        <div> 
            <p className='text-lg font-semibold mt-6'>Enter the name of the category</p>
        </div>
<form class="max-w-md mx-auto mt-16" onSubmit={handleFormSub}>
<div class="relative z-0 w-full mb-5 group">
  <input onChange={(e)=> setCategoryName(e.target.value)} value={categoryName} type="text" name="product_name" id="floating_product_name" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
  <label for="floating_product_name" class="absolute text-base text-gray-500 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-600 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">Category Name</label>
</div>
  <button type="submit" class="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
  )
}
