import React from 'react'
import { ColorRing } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#5BBFBA', '#5BBFBA', '#5BBFBA', '#5BBFBA', '#5BBFBA']}
            />
        </div>
    )
}

export default Loader