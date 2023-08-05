import React from 'react'
import {LuBellRing} from 'react-icons/lu'
import {RxAvatar} from 'react-icons/rx'
const Header = ({children}) => {
  return (
    <div className='flex justify-between px-6 pt-4 pb-8 border-b-[1px] border-gray-200'>
        <h2 className='text-xl '>{children}</h2>
        <div className='flex items-center gap-6 '>
            <div className='cursor-pointer'>
              <LuBellRing className=' text-black-500 text-2xl relative'/>
              <span className='absolute right-[62px] top-3 px-[6px] text-sm font-semibold rounded-[100%] bg-red-600 text-white '>8</span>
              </div>
        
        <div className='hover:bg-purple-800 hover:text-white rounded-full cursor-pointer'><RxAvatar className='text-2xl'/>
        </div>
        </div>
        </div>    
  )
}

export default Header