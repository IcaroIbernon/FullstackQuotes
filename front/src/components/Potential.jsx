import React from 'react'
import { FiPieChart } from 'react-icons/fi'
import { Chart } from "react-google-charts";
import { HiDotsVertical } from 'react-icons/hi'

const data = [
    ["Type", "Qnt"],
    ["1", 33],
    ["2", 26],
    ["3", 22],
    ["4", 10], // Below limit.
    ["5", 9], // Below limit.
];
const data1 = [
    ["Type", "Qnt"],
    ["1", 33],
    ["2", 26],
    ["3", 22],
    ["4", 10], // Below limit.
    ["5", 11], // Below limit.
];
const data2 = [
    ["Type", "Qnt"],
    ["1", 43],
    ["2", 24],
    ["3", 33],
];

const options = {
    sliceVisibilityThreshold: 0.2, // 20%
    legend: 'none'
};

const Potential = () => {
    return (
        <div className='w-1/2 m-6 h-72 bg-white border-2 divide-y border-opacity-20 rounded-lg overflow-hidden'>
            <div className='bg-white h-16 flex justify-between p-3 w-full rounded-lg'>
                <div className='flex'>
                    <FiPieChart className='h-10 w-10 stroke-wgreen pt-1' />
                    <p className='text-2xl inline-block pl-2 text-textside'>Potential Revenue</p>
                </div>
                <div>
                    <HiDotsVertical className='h-8 w-8' />
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/3'>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
                <div className='w-1/3'>
                    <Chart
                        chartType="PieChart"
                        data={data1}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
                <div className='w-1/3'>
                    <Chart
                        chartType="PieChart"
                        data={data2}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Potential