import React from 'react'
import Image from 'next/image'
import vector from '../../../Images/Vector.png'
import CompanyLogo from '../../../Images/companyLogo.png'
import vectorIcon from '../../../Images/vertIcon.png'
import newFriend from '../../../Images/add-friend.png'
import chat from '../../../Images/chat.png'
import ToDoList from './ToDoList'
import InProgress from './InProgress'
import Done from './Done'
import addIcon from '../../../Images/add.png'
const Body = () => {
  return (
    <div className='h-[calc(100%-80px)] w-[100%] bg-[#0D0B21] flex items-center flex-col '>
      <div className='bg-[#15132B] h-[150px] w-[94%] rounded flex flex-col my-8 justify-center '>
        <div className='flex justify-between px-5'>
          <div className='flex'>
            <Image
              src={vector}
              className='h-[20px] w-[20px] mr-4'
            />
            <div className='flex flex-col'>
              <p className='text-[#fff] text-[14px] font-bold'>School November Tasks</p>
              <p className='text-[#A5A5A5] text-[8px] ml-15 my-3'>Created by Instructor Day on November 31, 2022</p>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex flex-col mr-3 items-end'>
              <p className='text-[12px] text-[#fff]'>Central Martial Arts</p>
              <p className='text-[10px] text-[#7879F1] my-1'>Sunnywale,Ca</p>
            </div>
            <Image
              src={CompanyLogo}
              className='h-[40px] w-[40px] cursor-pointer mr-3'
            />
            <Image
              src={vectorIcon}
              className='h-[18px] w-[18px] cursor-pointer'
            />
          </div>
        </div>
        <div className='flex justify-between w-[100%] '>
          <div className='flex w-[60%] '>
            <div className='flex ml-14 relative w-[20%]'>
              <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center border-2 border-[#000]'></div>
              <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center absolute left-4 border-2 border-[#000]'></div>
              <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center absolute left-8 border-2 border-[#000]'></div>
              <div className='bg-[#C4C4C4] h-[32px] w-[32px] rounded-full flex items-center justify-center absolute left-12 border-2 border-[#000] '></div>
              <div className='bg-[#E328AF] h-[32px] w-[32px] rounded-full flex items-center justify-center absolute left-16 border-2 border-[#000]'><p className='text-[#fff] text-[10px]'>5+</p></div>
            </div>
            <div className='flex items-center w-[50%] justify-between'>
              <div className='bg-[#6418C3] flex w-max px-3 items-center rounded-xl h-[30px]'>
                <Image
                  src={newFriend}
                  className='h-[13px] w-[13px] mr-2'
                />
                <p className='text-[#fff] text-[9px] font-bold'>Invite People</p>
              </div>
              <div className='flex h-[30px] px-3 w-max border border-[#7879F1] items-center rounded-xl'>
                <p className='text-[#fff] text-[10px] font-bold'>Private</p>
              </div>
              <div className='bg-[#7879F1] h-[30px] px-3 rounded-xl w-[50px] justify-center items-center flex'>
                <p className='text-[#fff] text-[10px] font-bold'>Edit</p>
              </div>
              <div className='flex h-[30px] px-3 w-max border border-[#7879F1] items-center rounded-xl'>
                <Image
                  src={chat}
                  className='h-[13px] w-[13px] mr-2'
                />
                <p className='text-[#fff] text-[9px] font-bold'>45 Comments</p>
              </div>
            </div>
          </div>
          <div className='flex items-center w-[24%]'>
            <p className='text-[10px] text-[#fff] mr-4'>Total Progress 60%</p>
            <div className='flex'>
              <div className='h-[8px] w-[90px] bg-[#6418C3] rounded-l-lg'></div>
              <div className='h-[8px] w-[60px] bg-[#1E1C3A]  rounded-r-lg'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-4' >
        <ToDoList />
        <InProgress />
        <Done />
        <div className='flex  flex-col items-center'>
          <div className='flex h-[60px] items-center justify-between w-[180px]' >
            <p className='text-[#fff] font-bold text-[12px]'>Revised(0)</p>
            <div className='h-[30px] w-[30px] bg-[#6418C3] rounded-lg flex items-center justify-center opacity-50'>
              <Image
                src={addIcon}
                className='h-[12px] w-[12px]'
              />
            </div>
          </div>
          <div className='h-[65px] w-[200px] bg-[#211A75] flex rounded-md items-center justify-center'>
            <div className='h-[40px] w-[90%] rounded-md bg-[#15132B] border border-dashed flex items-center justify-center'>
              <p className='text-[#7879F1] text-[10px]'>Move Card Here</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Body