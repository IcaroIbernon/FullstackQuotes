import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { HiDotsVertical } from 'react-icons/hi'
import ChatSupport from './ChatSupport'

const Chat = () => {
  return (
    <div className='w-1/3 m-6 h-96 bg-white border-2 divide-y border-opacity-20 rounded-lg overflow-hidden'>
      <div className='bg-white h-1/6 flex justify-between p-3 w-full rounded-lg'>
        <div className='flex'>
          <BiMessage className='h-10 w-10 fill-wgreen' />
          <p className='text-2xl inline-block pl-2 text-textside'>Team Chat</p>
        </div>
        <div>
          <HiDotsVertical className='h-8 w-8' />
        </div>
      </div>
      <div className='h-5/6'>
        <ChatSupport name={'John Doe'} color={"bg-[#00FF00]"} />
        <ChatSupport name={'Janek Vivek'} color={"bg-[#00FF00]"} />
        <ChatSupport name={'Anca Dobro'} color={"bg-[#FF0000]"} />
        <ChatSupport name={'Kumar Cord'} color={"bg-[#FFA500]"} />
      </div>
    </div>
  )
}

export default Chat