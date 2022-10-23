import React from 'react'
import { ImHome } from 'react-icons/im'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { FaListAlt, FaPaperPlane, FaCog, FaRegLifeRing } from 'react-icons/fa'
import { IoMdDocument, IoMdPeople } from 'react-icons/io'
import { DiGoogleAnalytics } from 'react-icons/di'
import '../App.css'

const Sidebar = () => {
    return (
        <div className="flex">
            <aside className="w-40 bg-sidebar fixed left-0 top-13 h-screen bg-slate-700">
                <div className="py-4 px-3 bg-gray-50 rounded ">
                    <ul className="space-y-2 divide-y divide-slate-400/25">
                        <div className=''>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 ">
                                        <div className='grid grid-flow-col gap-1 text-red-500'>
                                            <ImHome className='h-6 w-6 fill-textside' />
                                            <p className="ml-3 font-semibold text-textside">Home</p>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 ">
                                        <div className='grid grid-flow-col gap-1'>
                                            <MdOutlineAttachMoney className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Quotes</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg ">
                                        <div className='grid grid-flow-col gap-1'>
                                            <FaListAlt className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Leads</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg ">
                                        <div className='grid grid-flow-col gap-1'>
                                            <FaPaperPlane className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Tours</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                        </div>

                        <div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                                        <div className='grid grid-flow-col gap-1'>
                                            <IoMdDocument className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Invoices</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg ">
                                        <div className='grid grid-flow-col gap-1'>
                                            <DiGoogleAnalytics className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Analytics</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                                        <div className='grid grid-flow-col gap-1'>
                                            <IoMdPeople className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Team</span>
                                        </div>

                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                                        <div className='grid grid-flow-col gap-1'>
                                            <FaCog className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Admin</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                            <div className='py-2'>
                                <li className='hover:bg-[#ccd0dc]'>
                                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                                        <div className='grid grid-flow-col gap-1'>
                                            <FaRegLifeRing className='h-6 w-6 fill-textside' />
                                            <span className="flex-1 ml-3 font-semibold text-textside">Support</span>
                                        </div>
                                    </a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar