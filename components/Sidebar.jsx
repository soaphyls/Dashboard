import Link from 'next/link'
import React from 'react'
import { RxDashboard, RxPerson, RxSketchLogo } from 'react-icons/rx'
import { FiSettings } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';



const Sidebar = ({ children }) => {
  return (
    <div className='flex '>
        <div className=' fixed w-20 bg-white justify-between flex flex-col p-4 border-r-[1px] h-screen'>

            <div className='flex flex-col items-center'>
                <Link href='/'>
                    <div className='p-3 bg-purple-900 rounded-lg text-white'>
                    <RxSketchLogo size={20}/>
                    </div>
                </Link>
                <span className='w-full p-2 border-b-[1px] border-gray-200'></span>
                

                <Link href='/'>
                    <div className='p-3 bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer inline-block rounded-lg'>
                    <RxDashboard size={20}/>
                    </div>
                </Link>
                <Link href='/Customers'>
                    <div className='p-3 bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer inline-block rounded-lg'>
                    <RxPerson size={20}/>
                    </div>
                </Link>
              
                <Link href='/Orders'>
                    <div className='p-3 bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer inline-block rounded-lg'>
                    <HiOutlineShoppingBag size={20}/>
                    </div>
                </Link>

                <Link href='/'>
                    <div className='p-3 bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer inline-block rounded-lg'>
                    <FiSettings size={20}/>
                    </div>
                </Link>

            </div>
            
        </div>
   
   
   
   
    <main className=' ml-20 w-full'>{ children }</main>
    </div>
  )
}

export default Sidebar