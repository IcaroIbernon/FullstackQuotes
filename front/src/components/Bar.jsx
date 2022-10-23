import React from 'react'

const Bar = (values) => {
    return (
        <div className='ml-4 mt-3 mr-2 grid grid-cols-2'>
            <div className='grid grid-rows-2 '>
                <div className=''>
                    <p className='text-bold'>
                        Lorem ipsum
                    </p>
                </div>
                <div>
                    dolor sit
                </div>
            </div>
            <div className='pt-5'>
                <div className='h-2 w-full'>
                    <div
                        style={{ width: `${values.value}%` }}
                        className={`h-full ${values.color}`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bar
