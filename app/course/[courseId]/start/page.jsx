"use client"
import {db} from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import React, { useEffect, useState } from 'react'
import {eq, and} from 'drizzle-orm'
import ChapterListCard from './_components/ChapterListCard'
import ChapterContent from './_components/ChapterContent'

function CourseStart({params}) {

    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();
    
    useEffect(()=>{
        GetCourse();
    }, [])

    const GetCourse=async()=>{
        const result = await db.select().from(CourseList)
        .where(eq(CourseList?.courseId, params?.courseId));
        setCourse(result[0]);
        console.log(result);
    }

    useEffect(() => {
        if (course) {
            GetSelectedChapterContent(0);
            
        }
    }, [course]);

        const GetSelectedChapterContent=async(chapterId)=>{
            const result = await db.select().from(Chapters)
            .where(and(eq(Chapters.chapterId, chapterId), 
            eq(Chapters.courseId, course?.courseId)));

            // To see if a chapter when clicked is showing
            console.log("chapterId:", chapterId);
            console.log("courseId:", course?.courseId);
            console.log('result'+result);

            setChapterContent(result[0]);
            console.log("content : "+chapterContent)
        }
  return (
    <div>
        {/* Chapter List SideBar */}
        <div className='fixed md:w-64 hidden md:block h-screen border-r shadow-sm'>
            <h2 className='font-medium text-lg bg-primary p-4 text-white' >
                {course?.courseOutput?.course_name}</h2>
        
            <div>
                {course?.courseOutput?.chapters.map((chapter, index)=>(
                    <div key={index} className={`cursor-pointer hover:bg-green-50 ${selectedChapter?.chapter_name== chapter?.chapter_name&&' bg-green-100'}`}
                    onClick={()=> {setSelectedChapter(chapter);
                    GetSelectedChapterContent(index)
                    }}
                    > 
                        <ChapterListCard key={index} chapter={chapter} index={index} />
                    </div>
                ))}
            </div>

        </div>
        {/* Content div */}
        <div className='md:ml-64'>
            <ChapterContent chapter={selectedChapter} 
            content={chapterContent}/>
        </div>
    </div>
  )
}

export default CourseStart