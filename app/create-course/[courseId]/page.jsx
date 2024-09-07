'use client'
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import {and, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo'
import CourseDetail from './_components/CourseDetail'
import ChapterList from './_components/ChapterList'

function CourseLayout({params}) {
    const {user}=useUser();
    const [course,setCourse]=useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        params&&GetCourse();
    },[params,user])

    const GetCourse=async()=>{
        const result=await db.select().from(CourseList)
        .where(and(eq(CourseList.courseId,params?.courseId), eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
        console.log(result)
        setCourse(result[0])
    }

    const GenerateChapterContent=()=>{
      setLoading(true);
      const chapters = course?.courseOutput?.course?.chapters;
      chapters.forEach(async(chapter, index) => {
        const PROMPT = 'Explain the concept in detail on Topic: '+course?.name+' , Chapter: '+chapter?.name+', in JSON format with list of array with field as title, explanation on given chapter in detail, Code example(code field in <precode> format) if applicable';
        console.log(PROMPT);
        if(index > 3){
          try{
            const result =await GenerateChapterContent_AI.sendMessage(PROMPT);
            console.log(result?.response?.text());
            // Generate Video URL


            //  Save chapter Content + Video URL
            setLoading(false);

          }catch(e){
            setLoading(false);
            console.log(e)
          }
        }
      })
    }
  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

      <LoadingDialog loading={loading} />
      {/* Basic Info */}
      <CourseBasicInfo course={course}/>
      {/* Course Detail */}
      <CourseDetail course={course}/>
      {/* List of Lesson */}
      <ChapterList course={course}/>

      <Button onClick={GenerateChapterContent} className="my-10" >Generate Course Content</Button>
    </div>
  )
}

export default CourseLayout
