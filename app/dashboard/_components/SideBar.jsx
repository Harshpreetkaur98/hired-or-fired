"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"

import {HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D} from "react-icons/hi2"
import { UserCourseListContext } from '@/app/_context/UserCourseListContent';

function SideBar() {
  const {userCourseList, setUserCourseList} = useContext(UserCourseListContext);
    const Menu=[
        {
            id:1,
            name:'Home',
            icon:<HiOutlineHome/>,
            path:'/dashboard'
        },
        {
            id:2,
            name:'Explore',
            icon:<HiOutlineSquare3Stack3D/>,
            path:'/dashboard/explore'
        },
        {
            id:3,
            name:'Upgrade',
            icon:<HiOutlineShieldCheck/>,
            path:'/dashboard/upgrade'
        },
        {
            id:4,
            name:'Logut',
            icon:<HiOutlinePower/>,
            path:'/dashboard/logout'
        }
    ]
    const path=usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/logo.png'} width={160} height={100}/>
      <hr className='my-5'/>
      <ul>
          {Menu.map((item) => (
              <Link href={item.path} key={item.id} passHref>
                  <li className={`flex items-center gap-4 my-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path==path && `bg-gray-100 text-black`}`}>
                      <div className='text-2xl'>{item.icon}</div>
                      <h2>{item.name}</h2>
                  </li>
              </Link>
            ))}
      </ul>
      <div className='absolute bottom-10 w-[80%]'>
        <Progress value={(userCourseList?.length/5) * 100}/>
        <h2 className='text-sm my-2'>{userCourseList?.length} out of 5 Cource created</h2>
        <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course generation</h2>
      </div>
    </div>
  )
}

export default SideBar
