import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 p-4 gap-2'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg border p-4'>
           <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-black'>₦506,876</p>
            <p className='text-gray-600'>Daily Reevenue</p>
           </div>
           <p className='bg-green-200 p-2 rounded-lg flex justify-center items-center'>
            <span className='text-green-700 text-lg'>+18%</span>
           </p>
            </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg border p-4'>
           <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-black'>₦43,506,706</p>
            <p className='text-gray-600'>YTD</p>
           </div>
           <p className='bg-red-200 p-2 rounded-lg flex justify-center items-center'>
            <span className='text-red-700 text-lg'>+17%</span>
           </p>
          
            </div>
        <div className=' bg-white flex justify-between w-full rounded-lg border p-4'>
           <div className='flex flex-col w-full pb-4'>
            <p className='text-2xl font-black'>16,876</p>
            <p className='text-gray-600'>Customers</p>
           </div>

           <p className='bg-blue-200 p-2 rounded-lg flex justify-center items-center'>
            <span className='text-blue-700 text-lg'>+11%</span>
           </p>
          
            </div>
        
    </div>
  )
}

export default TopCards