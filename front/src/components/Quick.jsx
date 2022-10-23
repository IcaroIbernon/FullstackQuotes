import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import dataTransports from '../Data/transports';
import dataAiports from '../Data/airports';
import axios from 'axios'
import { useDataStore } from '../store/Store';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";


const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    localFrom: Yup.string().required(),
    localDest: Yup.string().required(),
    transport: Yup.string().required(),
    qtPeople: Yup.number().positive().integer().required(),
    price: Yup.number().positive().integer().required(),
    depDate: Yup.date().required(),
    retDate: Yup.date().required().min(
        Yup.ref('depDate'),
        "End date can't be before Start date"
    )
});

const Quick = () => {
    const [value, setValue] = useState("");
    const today = (new Date());

    var datar = useDataStore(state => state.dataReady)
    const setDatar = useDataStore(state => state.updateDataReady)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleEmailError() {
        alert("The client email is already present in the database!")
    }

    function sendData(data) {
        let datas = {
            "email": data.email,
            "localFrom": data.localFrom,
            "localDest": data.localDest,
            "depDate": data.depDate.toISOString(),
            "retDate": data.retDate.toISOString(),
            "transport": data.transport,
            "name": data.name,
            "qtPeople": (+data.qtPeople),
            "price": (+data.price)
        };
        let config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/quote',
            headers: {
                'Content-Type': 'application/json'
            },
            data: datas
        };

        axios(config)
            .then((response) => {
                setDatar(false)
                reset()
            })
            .catch((error) => {
                handleEmailError()
            });
    }

    return (
        <div className=' h-5/6 p-2'>
            <form className='grid grid-cols-2 gap-2' onSubmit={handleSubmit((data) => console.log(data))}>
                <div className=''>
                    <div className=''>
                        <input type="text" placeholder="NAME" className={`input input-sm w-full max-w-xs font-semibold bg-fundo placeholder-black text-black ${errors.name && "border-lred"}`} {...register('name', { required: true })} />
                    </div>
                </div>
                <div className=' '>
                    <div className=''>
                        <input type="text" placeholder="EMAIL" className={`input input-sm w-full max-w-xs font-semibold bg-fundo placeholder-black text-black ${errors.email && "border-lred"}`} {...register('email', { required: true })} />
                    </div>
                </div>
                <div className=''>
                    <select defaultValue={value} className={`select select-sm w-full max-w-xs bg-fundo  text-black ${errors.localFrom && "border-lred"}`} {...register("localFrom", { required: true })}>
                        <option value="" disabled hidden>
                            FROM
                        </option>
                        {dataAiports.map(air => <option value={air.iata_code + "-" + air.city} key={air.iata_code + "-" + air.city}>{air.iata_code + "-" + air.city}</option>)}
                    </select>
                </div>
                <div className=''>
                    <select defaultValue={value} className={`select select-sm w-full max-w-xs bg-fundo  text-black ${errors.localDest && "border-lred"}`} {...register("localDest", { required: true })}>
                        <option value="" disabled hidden>
                            DESTINATION
                        </option>
                        {dataAiports.map(air => <option className='' value={air.iata_code + "-" + air.city} key={air.iata_code + "-" + air.city}>{air.iata_code + "-" + air.city}</option>)}
                    </select>
                </div>
                <div className='w-full z-0'>
                    <Controller
                        control={control}
                        name='depDate'
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='DEPARTURE DATE'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                minDate={today}
                                className={`input bg-fundo flex w-full rounded-lg pl-3 text-base font-semibold max-w-xs placeholder-black text-black max-h-8 z-0 ${errors.depDate && "border-lred"}`}
                            />
                        )}
                    />
                </div>
                <div className=''>
                    <Controller
                        control={control}
                        name='retDate'
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                placeholderText='RETURN DATE'
                                onChange={(date) => field.onChange(date)}
                                minDate={today}
                                selected={field.value}
                                className={`input bg-fundo flex w-full rounded-lg pl-3 text-base font-semibold max-w-xs placeholder-black text-black max-h-8 z-0 ${errors.retDate && "border-lred"}`}
                            />
                        )}
                    />

                </div>
                <div className=''>
                    <select defaultValue={value} className={`select select-sm w-full max-w-xs bg-fundo  text-black ${errors.transport && "border-lred"}`} {...register("transport", { required: true })}>
                        <option value="" disabled hidden>
                            TRANSPORT
                        </option>
                        {dataTransports.map(trans => <option value={trans.value} key={trans.value}>{trans.name}</option>)}
                    </select>
                </div>
                <div className=''>
                    <div className=''>
                        <input type="number" placeholder="PEOPLE" className={`input input-sm w-full max-w-xs font-semibold bg-fundo placeholder-black text-black ${errors.qtPeople && "border-lred"}`} {...register('qtPeople', { min: 1 })} />
                    </div>
                </div>
                <div className=''>
                    <div className=''>
                        <input type="number" placeholder="PRICE" className={`input input-sm w-full max-w-xs font-semibold bg-fundo placeholder-black text-black ${errors.price && "border-lred"}`} {...register('price', { required: true, min: 0 })} />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='bg-wgreen text-white font-semibold py-1 px-4 rounded-full justify-end'>
                        Create Quote
                    </button>
                </div>
            </form>
            <div className='flex justify-center p-3'>
                <p className='font-semibold text-lred'>
                {errors.retDate && "Return date can't be before Departure date"}
                </p>
            </div>
        </div>
    )
}

export default Quick