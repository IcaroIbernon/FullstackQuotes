import React from 'react'
import { TbAntennaBars5 } from 'react-icons/tb'
import { Chart } from "react-google-charts";
import { HiDotsVertical } from 'react-icons/hi'

const data = [
    ["Month", "Sales", "Expenses"],
    ["JAN", 1000, 400],
    ["FEV", 1170, 460],
    ["MAR", 660, 1120],
    ["APR", 1030, 540],
    ["MAY", 150, 340],
    ["JUN", 230, 260],
    ["JUL", 1340, 540],
    ["AUG", 120, 1230],
    ["SET", 1030, 540],
];

const options = {
    curveType: "linear",
    legend: 'none'
};

const Revenue = () => {
    return (
        <div className='w-1/2 m-6 h-72 bg-white border-2 divide-y border-opacity-20 rounded-lg overflow-hidden'>
            <div className='bg-white h-16 flex justify-between p-3 w-full rounded-lg'>
                <div className='flex'>
                    <TbAntennaBars5 className='h-10 w-10 stroke-wgreen' />
                    <p className='text-2xl inline-block pl-2 text-textside'>Revenue</p>
                </div>
                <div>
                    <HiDotsVertical className='h-8 w-8' />
                </div>
            </div>
            <div className='h-full'>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="80%"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Revenue