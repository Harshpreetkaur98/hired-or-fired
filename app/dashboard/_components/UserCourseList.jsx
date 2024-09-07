'use client'
import React, { useContext, useEffect, useState } from 'react'
import {db} from '@/configs/db'
import {CourseList} from '@/configs/schema'
import { eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import CourseCard from './CourseCard'
import { UserCourseListContext } from '@/app/_context/UserCourseListContent'


function UserCourseList() {

  const [courseList,setCourseList]=useState();
  const {UserCourseList, setUserCourseList} = useContext(UserCourseListContext);
  const {user}=useUser();


  useEffect(()=>{
    user&&getUserCourses();
  },[user])

  const getUserCourses=async()=>{
    const result=await db.select().from(CourseList)
    .where(eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress))
    console.log(result)
    setCourseList(result);
    setUserCourseList(result);
  }

  return (
    <div className='mt-10'>
      <h2 className='font-medium text-xl'>My AI Courses</h2>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {courseList?.map((course,index)=>(
          <CourseCard course={course} key={index} refreshData={()=>getUserCourses()}/>
        ))}
      </div>
    </div>
  )
}

export default UserCourseList
