import React from 'react'
import Searchbar from './Searchbar'

function Appbar() {
  return (
    <div className='flex justify-between fixed top-0 left-0 right-0 h-16 z-50 bg-neutral-950/90 backdrop-blur'>
        <div className=' inline-flex items-center'>
            <div className='hover:cursor-pointer ml-3 hover:bg-gray-500/60 rounded-full m-3 mt-4 p-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>
            <div className=''>
                <img className='w-30 pl-2 ml-3 hover:cursor-pointer' src="/loogo.png" alt="" />
            </div>
            
           
        </div>
        <div className=''>
            <Searchbar></Searchbar>
            {/* <input className='rounded-lg' type="text" />
            <img src="/searchh.png" alt="" /> */}
        </div>
        <div className='flex justify-between mr-4'>
            <div className='rounded-full size-8 pl-1 pr-1 hover:cursor-pointer hover:bg-gray-500/60 m-3 mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:cursor-pointer inline-flex items-center  hover:rounded-full  size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
            </div>
            
                <img src="/pro2.png" className='rounded-full size-9 inline-flex items-center m-3 hover:cursor-pointer' alt="" />

            {/* <img src="/belll.png" alt="" />
            <img className='rounded-full' src="/pro2.png" alt="" /> */}
        </div>

    </div>
  )
}

export default Appbar