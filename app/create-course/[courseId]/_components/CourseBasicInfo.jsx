import Image from 'next/image'
import React from 'react'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2'
import {Button} from '@/components/ui/button'
import EditCourseBasicInfo from '../_components/EditCourseBasicInfo'

function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
            <h2 className='font-bold text-3xl'>{course?.courseOutput?.course_name} <EditCourseBasicInfo course={course}/></h2>
            <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.description}</p>
            <h2 className='font-medium mt-5 flex gap-2 items-center text-green-600'><HiOutlinePuzzlePiece/>{course?.category}</h2>
            <Button className="w-full bg-green-700 hover:bg-green-900 mt-10">Start</Button>
        </div>
        <div className='bg-blue-100 flex justify-center rounded-xl h-[250px] object-center'>
            <Image src={'/placeholder.png'} width={300} height={300}/>

        </div>
      </div>
    </div>
  )
}

export default CourseBasicInfo
