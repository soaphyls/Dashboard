import Header from '@/components/Header'
import React from 'react'
import {BsPerson,BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '../data/data'

const Customers = () => {
  return (
    <div className='bg-gray-100 h-screen'>
        <Header children={'Customers Page'}/>

        <div className='w-full bg-white overflow-y-auto p-4 rounded-lg'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2
            justify-between items-center cursor-pointer'>
                <span>Name</span>
                <span className='sm:text-left text-right'>Email</span>
                <span className='hidden md:grid'>Last Orders</span>
                <span className='sm:grid hidden'>Payment Methods</span>
            </div>
            <ul>
                {data.map((order,id)=>{
                return (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4
                    sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer '>
                        <div className='flex items-center'>
                            <div className='bg-gray-200 hover:bg-gray-100 p-3 rounded-lg '>
                            <BsPerson className=' text-purple-800 '/>
                            </div>
                            <p className='pl-4'>{order.name.first +''+ order.name.last}</p>
                       </div>
                            <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                            <p className='hidden md:flex'>{order.date}</p>
                            
                      <div className='sm:flex justify-between hidden items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical/>
                        </div>
                    </li>
                    
                    ) })
                
              }
            </ul>
        </div>



    </div>
  )
}

export default Customers