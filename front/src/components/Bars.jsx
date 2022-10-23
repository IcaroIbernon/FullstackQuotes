import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import Bar from './Bar'

const Bars = () => {
  return (
    <div className='w-2/3 m-6 h-96 bg-white border-2 divide-y border-opacity-20 rounded-lg overflow-hidden'>
      <div className='bg-white h-1/6 flex justify-between p-3 w-full rounded-lg'>
        <div className='flex justify-between w-full'>
          <div className='flex'>
            <FaPaperPlane className='h-8 w-8 fill-wgreen pt-2' />
            <p className='text-2xl inline-block pl-2 text-textside'>Popular Destinations and Packages</p>
          </div>
          <div>
            <HiDotsVertical className='h-8 w-8' />
          </div>
        </div>
      </div>
      <div className='flex h-5/6'>
        <div className='outline outline-1 outline-black/10 w-1/3  '>
          <Bar value={'30'} color={'bg-[#5BBFBA]'} />
          <Bar value={'45'} color={'bg-lorange'} />
          <Bar value={'90'} color={'bg-ppurple'} />
          <Bar value={'55'} color={'bg-lgreen'} />
          <Bar value={'10'} color={'bg-lred'} />
        </div>
        <div className='w-2/3'>
        </div>
      </div>
    </div>
  )
}

export default Bars