import React from 'react'

function Appbar() {
  return (
    <div className='grid grid-cols-3'>
        <div className='col-span-1 grid justify-items-start'>
            
            <img  src="/menu.png" alt="" />
            <img src="/loogo.png" alt="" />
        </div>
        <div className='col-span-1 grid justify-items-center'>
            Search
            {/* <input className='rounded-lg' type="text" />
            <img src="/searchh.png" alt="" /> */}
        </div>
        <div className='col-span-1 grid justify-items-end'>
            Account
            {/* <img src="/belll.png" alt="" />
            <img className='rounded-full' src="/pro2.png" alt="" /> */}
        </div>

    </div>
  )
}

export default Appbar