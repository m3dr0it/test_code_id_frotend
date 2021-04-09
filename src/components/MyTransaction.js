import axios from 'axios'
import { useEffect, useState } from 'react'
import { backend_url } from '../backend-config'
const MyTransaction = () => {
    const username = localStorage.getItem('username')
    const [transactions,setTransactions] = useState(null)

    useEffect(async ()=>{
        try {
            let result = await axios.get(backend_url+'/transaction/'+username)
            console.log(result)
            if(result){
                setTransactions(result.data)
            }else{
                transactions = null
            }
        } catch (error) {
            console.log(error)
        }
    },[])
 
    return(
        <div className="w-full">
<div className="mt-10 mx-10">
      <table class="min-w-full table-auto rounded-sm">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300">NO</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Product</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Subtotal</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Date</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200 justify-between">
                {
                    transactions !== null ? 
                    transactions.map((x)=>{
                        return (
                        <>
                        <tr>
                        <td class="px-16 py-2">{x.transaction_no}</td>
                        <td class="px-16 py-2">{x.product_name}</td>
                        <td class="px-16 py-2">{x.subtotal}</td>
                        <td class="px-16 py-2">{x.created_date}</td>
                       </tr>
                        </>
                        )
                    }):null
                }
        </tbody>
      </table>
    </div>
        </div>
    )
}

export {MyTransaction}