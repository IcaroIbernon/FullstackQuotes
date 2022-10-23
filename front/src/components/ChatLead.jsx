import React from 'react'

const ChatLead = (values) => {
    return (
        <div className='flex m-1 pb-2 pt-1'>
            <div className=' pl-3'>
                <svg width="40" height="40" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z" fill="black" />
                </svg>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 w-full px-2'>
                <div className='text-black font-semibold'>
                    {values.name}
                </div>
                <div className='justify-self-end text-xs font-semibold pt-1 pr-2'>
                    {values.time}
                </div>
                <div className='col-span-2 text-xs'>
                    Hey, i want place my package
                </div>
            </div>
        </div>
    )
}

export default ChatLead