import React from 'react'
import addIcon from '../../../public/Images/add.png'
import Image from 'next/image'
import vectorIcon from '../../../public/Images/icVert.png'
import clock from '../../../public/Images/clock.png'
import  { ToDoListData } from '../../../Constant/data'


const ToDoListCard = ({item,index}:any) => {
    return (
        <div className='h-[150px] w-[260px] rounded-md bg-[#211A75] flex flex-col items-center justify-center mb-4' key={item.index}>
            <div className='flex items-center w-[85%] mb-2 h-[20px] justify-between'>
                <div className='flex items-center'>
                    <div className='h-[10px] w-[10px] rounded-full bg-[yellow] mx-2'></div>
                    <p className='text-[#fff] text-[12px] font-semibold'>{item.title}</p>
                </div>
                <Image
                alt='image'
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
            <div className='flex justify-between w-[80%]'>
                <div className='flex relative'>
                    <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center border-2 border-[#000]'></div>
                    <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center absolute border-2 border-[#000] left-5'></div>
                </div>
                <div className='flex items-center'>
                    <Image
                      alt='image'
                        src={clock}
                        className='h-[14px] w-[14px] mx-2'
                    />
                    <p className='text-[#A5A5A5] text-[10px]'>Due in 4 days</p>
                </div>
            </div>
        </div>
    )

}

const ToDoList = () => {
    return (
        <div className='h-max' >
            <div className='flex flex-col items-center'>
                <div className='flex h-[60px] items-center justify-between w-[220px]' >
                    <p className='text-[#fff] font-bold text-[12px]'>To Do ToDoList(24)</p>
                    <div className='h-[30px] w-[30px] bg-[#6418C3] rounded-lg flex items-center justify-center '>
                        <Image
                          alt='image'
                            src={addIcon}
                            className='h-[12px] w-[12px]'
                        />
                    </div>
                </div>
{
    ToDoListData.map((item,index)=>{
        return(
            <ToDoListCard  item={item} key={index}/>
        )
    })
}
               
            </div>
        </div>
    )
}

export default ToDoList