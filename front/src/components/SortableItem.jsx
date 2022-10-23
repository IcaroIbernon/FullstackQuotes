import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Quick from './Quick';
import Pendings from './Pendings';
import Leads from './Leads';
import { FiFastForward } from 'react-icons/fi'
import { FaExpandArrowsAlt } from 'react-icons/fa'
import { GiBackwardTime } from 'react-icons/gi'
import { VscDebugRestart } from 'react-icons/vsc'
import { AiOutlineMail } from 'react-icons/ai'
import { useDataStore } from '../store/Store';

export default function SortableItem(props) {
    var datar = useDataStore(state => state.dataReady)
    const setDatar = useDataStore(state => state.updateDataReady)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    function handdleReset(){
        setDatar(false)
    }

    return (
        <div className='' ref={setNodeRef} style={style} >
            <div >
                {(() => {
                    switch (props.id) {
                        case "Quick":
                            return (
                                <div className='w-full bg-white h-80 border-2 divide-y border-opacity-20 rounded-lg'>
                                    <div className='bg-white h-1/6 flex justify-between p-3 w-full rounded-lg'>
                                        <div className='flex'>
                                            <FiFastForward className='h-10 w-10 stroke-wgreen' />
                                            <p className='text-2xl inline-block pl-2 text-textside'>Quick quote</p>
                                        </div>
                                        <div {...attributes} {...listeners}>
                                            <FaExpandArrowsAlt className='h-8 w-8 pt-1 opacity-30' />
                                        </div>
                                    </div>
                                    <Quick />
                                </div>
                            )
                        case "Pendings":
                            return (
                                <div className='w-full h-80 border-2 divide-y rounded-lg'>
                                    <div className='bg-white h-1/6 flex justify-between p-3 w-full rounded-lg'>
                                        <div className='flex'>
                                            <AiOutlineMail className='h-10 w-10 fill-wgreen' />
                                            <p className='text-2xl inline-block pl-2 text-textside'>Pending quotes</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <button onClick={() => handdleReset()}><VscDebugRestart className='h-8 w-8 pt-1 opacity-30' /></button>
                                            <div {...attributes} {...listeners}>
                                                <FaExpandArrowsAlt className='h-8 w-8 pt-1 opacity-30' />
                                            </div>
                                        </div>
                                    </div>
                                    <Pendings />
                                </div>
                            )
                        case "Leads":
                            return (
                                <div className='w-full h-80 border-2 divide-y rounded-lg'>
                                    <div className='bg-white h-1/6 flex justify-between p-3 w-full rounded-lg'>
                                        <div className='flex'>
                                            <GiBackwardTime className='h-10 w-10 fill-wgreen' />
                                            <p className='text-2xl inline-block pl-2 text-textside'>New Leads</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <VscDebugRestart className='h-8 w-8 pt-1 opacity-30' />
                                            <div {...attributes} {...listeners}>
                                                <FaExpandArrowsAlt className='h-8 w-8 pt-1 opacity-30' />
                                            </div>
                                        </div>
                                    </div>
                                    <Leads />
                                </div>
                            )
                    }
                })()}
            </div>
        </div>
    );
}
