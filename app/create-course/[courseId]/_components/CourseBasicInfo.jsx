import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlinePuzzlePiece } from 'react-icons/hi2'
import {Button} from '@/components/ui/button'
import EditCourseBasicInfo from '../_components/EditCourseBasicInfo'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import {storage} from '@/configs/firebaseConfig'
import { eq } from 'drizzle-orm'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'


function CourseBasicInfo({course, refreshData}) {

  const [selectedFile, setSelectedFile] = useState();


  // Select file and upload to filebase storage.

  const onFileSelected=async(event)=> {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));

    const fileName = Date.now() + '.jpg';
    const storageRef = ref(storage, 'ai-course/' + fileName);
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Upload file completed.')
    }).then(resp=>{
      getDownloadURL(storageRef).then(async(downloadUrl) => {
        console.log(downloadUrl);
        await db.update(CourseList).set({
          courseBanner:downloadUrl
        }).where(eq(CourseList.id, course?.id))
      })
    })
    
  }

  useEffect(()=>{
    if(course){
      setSelectedFile(course?.courseBanner)
    }
  },[course])

  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
            <h2 className='font-bold text-3xl'>{course?.courseOutput?.course_name} <EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/></h2>
            <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.description}</p>
            <h2 className='font-medium mt-5 flex gap-2 items-center text-green-600'><HiOutlinePuzzlePiece/>{course?.category}</h2>
            <Button className="w-full bg-green-700 hover:bg-green-900 mt-10">Start</Button>
        </div>
        <div>
          <label htmlFor='upload-image'>
            <Image src={selectedFile?selectedFile:'/placeholder.png'} width={300} height={300} className='w-full rounded-xl h-[250px] object-cover cursor-pointer'/>
            <input type="file"  id="upload-image" 
            className="opacity-0" onChange={onFileSelected} />
`         </label>
        </div>
      </div>
    </div>
  )
}

export default CourseBasicInfo
