import React from 'react'
import { MdMessage } from 'react-icons/md'

const ChatSupport = (values) => {
    return (
        <div className='flex m-1 pb-2 pt-1'>
            <div className='pl-3'>
                <div className="pt-1">
                    <div className='relative'>
                        <span className={`absolute top-1.5 left-9 transform -translate-y-2 w-3.5 h-3.5 ${values.color} border-2 border-white dark:border-gray-800 rounded-full`}></span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-black" />

                </div>
            </div>
            <div className='grid grid-cols-2 w-full px-2'>
                <div className='text-black font-semibold'>
                    {values.name}
                </div>
                <div className='row-span-2 w-full h-full'>
                    <div className='flex w-full h-full justify-end items-center pr-4'>
                        <MdMessage className='h-8 w-8 fill-wgreen' />
                    </div>
                </div>
                <div className='col-span-1 text-xs'>
                    Costumer service <span className='italic'>avaliable</span>
                </div>
            </div>
        </div>
    )
}

export default ChatSupport