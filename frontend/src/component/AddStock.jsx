import React,{useState, useEffect}from 'react'
import axios from 'axios';

export default function AddStock() {
    const[categories, setCategories] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState('');
    const[products, setProducts] = useState([]);
    const[selectedProduct, setSelectedProduct] = useState('');
    const[showMore, setShowMore] = useState(false);
    const[show, setShow] = useState(false);
    const[stock, setStock] = useState('');
    const[showAddStock, setShowAddStock] = useState(false);
    const[updateStock, setUpdateStock] = useState('');

    const handleFormSub = async (e)=>{
        try {
            e.preventDefault();
            const stockToAdd = Number(updateStock);
            if (isNaN(stockToAdd)) {
                alert("Please enter a valid number for stock.");
                return;
            }
            const response = await axios.patch(`http://localhost:7000/updateStock/${selectedProduct}`,{
                updateStock: stockToAdd,
            })
            if(response.status !== 200){
                console.log(response.error);
            }else{
                alert(`${updateStock} added to ${selectedProduct} Stock`)
            }
        } catch (error) {
            console.log(error);
        }  
    }
    useEffect(()=>{
        const getAllCategory = async ()=>{
            try {
                const response = await axios.get('http://localhost:7000/getallcategory');
                if(response){
                    setCategories(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategory();
    },[])

    const getProducts = async (category)=>{
        try {
            const response = await axios.get(`http://localhost:7000/getproduct/${category}`);
            if(response){
                setProducts(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getStock = async (product)=>{
        try {
            const response = await axios.get(`http://localhost:7000/getStock/${product}`);
            if(response){
                setStock(response.data.stockLevel);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDropDownChange1 = (e)=>{
        const category = e.target.value;
        setSelectedCategory(category);
        if (category !== '') {
          setShow(true);
          getProducts(category);
        }
    }

    const handleDropDownChange2 = (e)=>{
        const product = e.target.value;
        setSelectedProduct(product);
        if (product !== '') {
            setShowMore(true);
            getStock(product);
          }
    }

  return (
    <div>
      <h2 className='font-semibold text-lg underline underline-offset-4'>Check out and add your product stocks</h2>
      <div className='mt-16'>
        <select className='bg-blue-800 text-white w-48 h-10 rounded-lg p-2 shadow-2xl hover:bg-blue-600' onChange={handleDropDownChange1} value={selectedCategory}>
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
    {show && (<div className='mt-6'>
        <select className='bg-blue-800 text-white w-48 h-10 rounded-lg p-2 shadow-2xl hover:bg-blue-600' onChange={handleDropDownChange2} value={selectedProduct}>
        <option className="bg-gray-900 text-white" value="">
            Select Product
          </option>
        {products.map((product) => (
        <option className="bg-gray-900 text-white" key={product._id} value={product.productName}>
          {product.productName}
        </option>
        ))}
        </select>
        </div>)}
    {showMore && (
        <div className='mt-6'>
            <p className='font-semibold'>{selectedProduct} stock is {stock}, if you want to add more to stock then click below button</p>
            <button onClick={() => setShowAddStock(true)} class="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Stock</button>
        </div>
    )}
    {showAddStock && (
        <form class="max-w-md mx-auto mt-16" onSubmit={handleFormSub}>
        <div class="relative z-0 w-full mb-5 group">
          <input onChange={(e)=> setUpdateStock(e.target.value)} value={updateStock} type="text" name="product_name" id="floating_product_name" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
          <label for="floating_product_name" class="absolute text-base text-gray-500 duration-300 transform scale-75 -translate-y-6 top-3 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-600 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600">Add stock</label>
        </div>
          <button type="submit" class="text-white bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )}
    </div>
  )
}
