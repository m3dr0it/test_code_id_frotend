import { useState } from "react"
import axios from 'axios'
import { backend_url } from "../backend-config"
import { useHistory } from "react-router-dom"

const AddProduct = () => {
    const [productName,setProductName] = useState()
    const [price,setPrice] = useState()
    const history = useHistory()
    const [stock,setStock] = useState()

    const onChangeProductName = (e) => {
      setProductName(e.target.value)
    }

    const onChangePrice = (e) => {
      setPrice(e.target.value)
    }


    const onSubmitProduct = async (e) => {
      e.preventDefault()
    try {
        let data = {
            product_name : productName,
            price,
            stock
        }

        let result = await axios.post(backend_url+"/product",data)
        history.push('/home')
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    }
    
    const onChangeStock = (e) => {
      setStock(e.target.value)
    }

  return(
      <>
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Add Product</h1>
                    <p class="text-gray-400 dark:text-gray-400">Fill up the form below.</p>
                </div>
                <div class="m-7">
                    <form onSubmit={onSubmitProduct} id="form">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Product Name</label>
                            <input type="text" value={productName} onChange={onChangeProductName} name="name" id="name" placeholder="John" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div
                         class="mb-6">
                            <label for="pasword" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Price</label>
                            <input type="number" value={price} onChange={onChangePrice} name="email" id="email" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <label for="pasword" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Stock</label>
                            <input type="number" value={stock} onChange={onChangeStock} name="email" id="email" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        <div class="mb-6">
                            <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Add</button>
                        </div>
                        <p class="text-base text-center text-gray-400" id="result">
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}

export {AddProduct}