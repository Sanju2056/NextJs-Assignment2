import React from 'react'
import Image from 'next/image'
import menuIcon from '../../../Images/hamburgermenu.png'
import banner from '../../../Images/banner.png'
import { SideBarData } from '../../../Constant/data'


const SideBarCard = ({ item, index }) => {
  return (
    <div className='flex justify-start h-[55px] cursor-pointer w-[60%] '>
      <Image
        src={item.icon}
        className='h-[20px] w-[20px] mr-8'
        alt='dashIcon'
        width={20}
        height={20}
      />
      <p className='text-[#464366] font-normal '>{item.title}</p>
    </div>
  )
}
const SideBar = () => {
  return (
    <div className='bg-[#15132B] h-[100%] color-[#fff] w-[240px] flex flex-col justify-center'>
      <div className='flex items-center justify-center h-[70px]'>
        <p className='text-[#fff] mr-5'>weframetech</p>
        <Image
          src={menuIcon}
          alt='icon'
          className='h-[25px] w-[30px] cursor-pointer'
        />
      </div>
      <p className='text-[#C7C7C7] mb-4 px-7 font-bold text-sm'>MAIN MENU</p>
      <div className='flex  flex-col items-center my-4'>
      {
        SideBarData.map((item, index) => {
          return (
            <SideBarCard item={item} index={index} />
          )
        })
      }
      </div>
     

      <div className='flex justify-center'>
        <Image
          src={banner}
          className='h-[150px] w-[140px]'
          alt='banner'
        />
      </div>
    </div>
  )
}

export default SideBar