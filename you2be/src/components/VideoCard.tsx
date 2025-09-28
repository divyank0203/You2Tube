import React from 'react'

function VideoCard(props: any) {
  return (
    <div>
        <div className='grid grid-rows-10'>
            <div className=' w-120 pb-2'>
                <img className='rounded-xl' src={props.thumbnail} alt="" />
            </div>
            
            <div className='grid grid-cols-12 w-120 h-min '>
                <div className='col-span-1'>
                    <img className='rounded-full w-10 h-10' src={props.avatar} alt="" />
                </div>
                <div className='col-span-10 pl-3'>
                    <div className=' font-bold text-base'>
                        {props.title}
                    </div>
                    
                    <div className='col-span-10 text-gray-600 text-sm'>
                        {props.channel}
                        <br />
                        {props.views} Views | {props.time} Ago
                    </div>
                    
                </div>
                <div className='col-span-1'>
                    <img className='hover:cursor-pointer hover:bg-gray-500/40 hover:rounded-full h-8 w-8
                    p-1.5' 
                    src="/more (1).png" alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default VideoCard