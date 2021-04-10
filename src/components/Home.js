import { useEffect, useState } from 'react'
import {  CardProduct  } from './CardProduct'
import axios from 'axios'
import { backend_url } from '../backend-config'
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()
    const [product,setProduct] = useState([])
    const [prodToBuy,setProdToBuy] = useState({})
    const username = localStorage.getItem('username')
    const [refresh,setRefresh] = useState(false)
    let data = {}
    
    useEffect(async ()=>{
        console.log(prodToBuy)
        data = {
            id_product : prodToBuy.id_product,
            price : prodToBuy.price,
            qty : 1,
            subtotal : prodToBuy.price * 1,
            created_by : localStorage.getItem('username')
        }
        let result = await axios.post(backend_url+'/transaction',data)
        console.log(result)
        setRefresh(!refresh)
    },[prodToBuy])

    useEffect(async ()=>{
        let result = await axios.get(backend_url+'/product')
        console.log(result)
        if(result.data !== undefined){
            setProduct(result.data)
        }
    },[refresh])

    const onClickLogout = (e) => {
      localStorage.setItem('username','')
      localStorage.getItem('token','')
      history.push('/login')
    }

  return(
      <div>
          <div class="relative">
                <div class="absolute top-0 right-0 my-0">
                <button onClick={()=>history.push('/my-transaction')} class="bg-blue-500 px-4 mx-2 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600">My Transactions</button>
                <button onClick={onClickLogout} class="bg-blue-500 px-4 mx-2 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600">Logout</button>
                </div>
            </div>
        <div class="my-16 flex items-center justify-center flex-wrap">
        <div class="my-8">
            <h1 class="font-bold text-2xl text-center">Hi {username}</h1>
            <div className="flex flex-row">
            {
                product !== undefined ? 
                product.map((x)=>{
                    return <CardProduct
                    product={x}
                    setProdToBuy={setProdToBuy}
                    />       
                }):null
            }
            </div>
        </div>
    </div>
      </div>
  )
}

export {Home}