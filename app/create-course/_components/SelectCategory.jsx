import React from 'react'
import Image from 'next/image'
import CategoryList from '@/app/_shared/CategoryList'

function SelectCategory() {
  return (
    <ul className='grid grid-cols-3 gap-10 px-10 md:px-20'>
          {CategoryList.map((item,index) => (
              <li>
                  <div className='flex flex-col p-5 border items-center rounded-xl hover:border-green-700 hover:bg-blue-50 cursor-pointer'>
                    <Image src={item.icon} width={50} height={50}/>
                    <h2>{item.name}</h2>
                  </div>
              </li>
            ))}
      </ul>
  )
}

export default SelectCategory
