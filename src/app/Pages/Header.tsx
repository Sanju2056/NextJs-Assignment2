import React from 'react'
import search from '../../../public/Images/search.png'
import Image from 'next/image'
import folder from '../../../public/Images/folder.png'
import check from '../../../public/Images/check.png'
import activity from '../../../public/Images/Activities.png'
import notification from '../../../public/Images/notification.png'
import usa from '../../../public/Images/united-states.png'
import arrow from '../../../public/Images/arrow.png'

const Header = () => {
  return (
    <div className='h-[80px] flex items-center w-[100%] justify-around bg-[#15132B] '>
      <div className='h-[40px] w-[320px] rounded-2xl flex overflow-hidden bg-[#211A75]  cursor-pointer'>
        <Image
        alt='image'
          src={search}
          className='h-[13px] w-[13px]  mt-3.5  mx-5'
        />
        <input placeholder='Search here' className='h-[100%] w-[95%] border-none text-[12px] bg-[#211A75] text-[#AAAAAA] outline-0' />
      </div>
      <p className='text-[10px] font-bold text-[#6418C3] underline decoration-1'>OTHER MENU</p>
      <div className='flex cursor-pointer'>
        <Image
 alt='image'
src={folder}
          className='h-[50px] w-[50px]'
        />
        <Image
         alt='image'
          src={activity}
          className='h-[50px] w-[50px]'
        />
        <Image
         alt='image'
          src={notification}
          className='h-[50px] w-[50px]'
        />
        <Image
         alt='image'
          src={check}
          className='h-[50px] w-[50px]'
        />
      </div>
      <div className='h-[40px] w-[120px] flex items-center bg-[#211A75] rounded-3xl cursor-pointer'>
        <Image
         alt='image'
          src={usa}
          className='h-[20px] w-[20px] mx-3'
        />
        <p className='text-[9px] font-bold text-[#fff] mr-3'>ENGLISH</p>
        <Image
         alt='image'
          src={arrow}
          className='h-[7px] w-[7px]'
        />
      </div>
      <div className='flex items-center'>
        <div className='h-[35px] w-[35px] rounded-md bg-[#C4C4C4] mr-3'/>
        <div className='flex flex-col mr-3'>
          <p className='text-[12px] text-[#fff]'>Instructor Day</p>
          <p className='text-[10px] text-[#7879F1]'>Super Admin</p>
        </div>
        <Image
         alt='image'
          src={arrow}
          className='h-[7px] w-[7px] cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Header