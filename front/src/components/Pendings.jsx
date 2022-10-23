import React, { useReducer, useState, useEffect } from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import axios from 'axios'
import Loader from './Loader'
import { useDataStore } from '../store/Store'

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('id', {
        cell: info => info.getValue(),
        header: () => <div className='flex'><span className='justify-start'>ID #</span></div>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: () => <div className='flex'><span className='justify-start'>Name</span></div>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('localDest', {
        cell: props => <span>{props.getValue().toUpperCase()}</span>,
        header: () => <div className='flex'><span className='justify-start'>Destination</span></div>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('price', {
        cell: props => <span>$ {props.getValue()}</span>,
        header: () => <div className='flex'><span className='justify-start'>PRICE</span></div>,
        footer: info => info.column.id,
    }),
]


const Pendings = () => {
    const [data, setData] = useState()
    var datar = useDataStore(state => state.dataReady)
    const setDatar = useDataStore(state => state.updateDataReady)

    function grabData() {
        axios.get('http://127.0.0.1:8000/quotes')
            .then(function (response) {
                setData(response.data)
                setDatar(true)
            })
            .catch(function (error) {
                console.error(error);
            })
    }

    useEffect(() => {
        grabData()
    }, [datar])


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="p-3 bg-white h-5/6 rounded-br-lg rounded-bl-lg overflow-auto">
            {datar ?
                <div>
                    <table className='w-full text-black text-sm'>
                        <thead className=''>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <th className='justify-start' key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : <div className='w-full h-full'><Loader /></div>}
        </div>
    )
}


export default Pendings