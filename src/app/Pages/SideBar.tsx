import React from 'react'
import Image from 'next/image'
import menuIcon from '../../../Images/hamburgermenu.png'
import dashIcon from '../../../Images/calendar-silhouette.png'
import banner from '../../../Images/banner.png'

const SideBar = () => {
  return (
    <div className='bg-[#15132B] h-[100%] color-[#fff] w-[240px]'>
      <div className='flex items-center justify-center h-[70px]'>
        <p className='text-[#fff] mr-5'>weframetech</p>
        <Image
          src={menuIcon}
          alt='icon'
          className='h-[25px] w-[30px] cursor-pointer'
        />
      </div>
      <p className='text-[#C7C7C7] mb-4 px-7 font-bold text-sm'>MAIN MENU</p>
      <div className='flex justify-center h-[50px] cursor-pointer'>
        <Image
          src={dashIcon}
          className='h-[20px] w-[20px] mr-5'
          alt='dashIcon'
        />
        <p className='text-[#464366] font-normal '>Dashboard</p>
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