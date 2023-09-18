import React from 'react'
import addIcon from '../../../Images/add.png'
import Image from 'next/image'
import vectorIcon from '../../../Images/icVert.png'
import clock from '../../../Images/clock.png'
import { DoneData } from '../../../Constant/data'
const ToDoListCard = ({ item, index }) => {
    return (
        <div className='h-[150px] w-[260px] rounded-md bg-[#211A75] flex flex-col items-center justify-center mb-4'>
            <div className='flex items-center w-[85%] mb-2 h-[20px] justify-between'>
                <div className='flex items-center'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[yellow] mx-2'></div>
                    <p className='text-[#fff] text-[12px] font-semibold'>{item.title}</p>
                </div>
                <Image
                    src={vectorIcon}
                    className='h-[15px] w-[15px]'
                />
            </div>
            <div className='w-[80%]'>
                <p className='text-[#fff] text-[10px]'>
                    {item.description}
                </p>
            </div>
            <div className='h-[6px] w-[80%] bg-[#000] my-2'></div>
            <div className='flex'>
                <div className='flex'>
                    <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center '></div>
                    <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center '></div>
                </div>
                <div className='flex items-center'>
                    <Image
                        src={clock}
                        className='h-[14px] w-[14px] mx-2'
                    />
                    <p className='text-[#A5A5A5] text-[10px]'>Due in 4 days</p>
                </div>
            </div>
        </div>
    )

}

const Done = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <div className='flex h-[60px] items-center justify-between w-[220px]' >
                    <p className='text-[#fff] font-bold text-[12px]'>To Do ToDoList(24)</p>
                    <div className='h-[30px] w-[30px] bg-[#6418C3] rounded-lg flex items-center justify-center opacity-50'>
                        <Image
                            src={addIcon}
                            className='h-[12px] w-[12px]'
                        />
                    </div>
                </div>
                {
                    DoneData.map((item, index) => {
                        return (
                            <ToDoListCard item={item} index={index} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Done