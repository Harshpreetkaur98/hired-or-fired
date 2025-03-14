import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Image src={"/logo.png"} width={150} height={150}/>
      <UserButton/>
    </div>
  )
}

export default Header
