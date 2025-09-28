import React from 'react'

function Searchbar() {
  return (
    <div>
        
 
     
    <div className="relative">
        <div className="w-120 flex focus:ring-1 focus:ring-blue-300 text-gray-900 border border-gray-500 rounded-full mt-1.5 p-1 pl-3 text-sm pr-">
            <input type="search" id="default-search" className=" focus:border-blue-500 w-full outline-none p-2 ps-10 text-sm text-gray-900 border border-none rounded-full bg-slate-950   dark:border-none dark:placeholder-gray-400 dark:text-white " placeholder="Search" required />
             <button type="submit" className="text-gray-400 font-bold bg-slate-950 absolute end-2.5 bottom-2.5 hover:cursor-pointer  hover:bg-gray-800 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-full inline-flex items-center text-sm px-4 py-1.5">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>

        </div>

    </div>


    </div>
  )
}

export default Searchbar