import Header from '@/components/Header'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

const Orders = () => {
  return (
    <div className=' bg-gray-100 h-screen'>
      <Header children={'Orders Page'}/>

      <div className='p-4'>
        <div className='w-full bg-white rounded-lg m-auto border p-4 overflow-y-auto'>
            <div className='md:grid-cols-4 sm:grid-cols-3 grid p-2 my-3 
            grid-cols-2 items-center justify-between cursor-pointer'>
                <span>Order</span>
                <span className='sm:text-left text-right'>Status</span>
                <span className='md:grid hidden'>Last Order</span>
                <span className='sm:grid hidden'>Payment Method</span>
            </div>
            <ul>
                { data.map((order,id)=>{
                    return (

                        <li key={id} className='bg-gray-50 my-3  rounded-lg hover:bg-gray-100 p-4 justify-between items-center '>
                            <div className='justify-between items-center md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid'>
                                <div className='flex'>
                                    <div className='bg-gray-200 p-3 rounded-lg hover:bg-gray-100'>
                                        <FaShoppingBag className='text-purple-500'/>
                                    </div>
                                    <div className='pl-4'>
                                    <p className='font-bold'>₦{order.total}</p>
                                    <p className=' text-sm'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p className='sm:text-left text-right'>
                                    
                                    <span className={
                                        order.status=='Processing'? 'bg-green-200 p-2 rounded-full'
                                        :order.status=='Completed'? 'bg-blue-200 p-2 rounded-full'
                                        :'bg-yellow-200 p-2 rounded-full'
                                    }> {order.status}</span>
                                    
                                    </p>
                                <p className='hidden md:flex'>{order.date}</p>
                           
                           <div className='hidden sm:flex justify-between items-center '>
                            <p>{order.method}</p>
                            <BsThreeDotsVertical/>
                           </div>
                            </div>
                        </li>
                    )
                })


                }

            </ul>
        </div>
      </div>

    </div>
  )
}

export default Orders