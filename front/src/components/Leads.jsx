import React from 'react'
import ChatLead from './ChatLead'


const Leads = () => {
    return (
        <div className='bg-white h-5/6 rounded-br-lg rounded-bl-lg'>
            <ChatLead name={'John Doe'} time={"15:10PM"} />
            <ChatLead name={'Janek Vivek'} time={"14:20PM"}/>
            <ChatLead name={'Anca Dobro'}time={"13:40PM"}/>
            <ChatLead name={'Kumar Cord'} time={"13:10PM"}/>
        </div>
    )
}

export default Leads