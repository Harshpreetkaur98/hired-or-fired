import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import {HiPencilSquare} from "react-icons/hi2"
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

import {db} from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'

function EditChapters({course, index,refreshData}) {

    const Chapters = course?.courseOutput?.chapters;
    const [name, setName] = useState();
    const [about, setAbout] = useState();

    useEffect(() => {
      setName(Chapters[index]?.chapter_name);
      setAbout(Chapters[index]?.about);
    },[course])

    const onUpdateHandler = async() => {
        Chapters[index].chapter_name = name;
        Chapters[index].about = about;
        const result=await db.update(CourseList).set({
          courseOutput:course?.courseOutput
        }).where(eq(CourseList.courseId,course.courseId))
        .returning({courseId:CourseList.courseId});

        refreshData(true);
    }

  return (
<Dialog>
  <DialogTrigger><HiPencilSquare /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter</DialogTitle>
      <DialogDescription>
      <div className='mt-3'>
            <label>Course Title</label>
            <Input defaultValue={name}
            onChange={(event)=>setName(event.target.value)}/>
      </div>
       <div>
           <label>Description</label>
           <Textarea className='h-40' defaultValue={about} 
           onChange={(event)=>setAbout(event.target.value)}/>
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
    <DialogClose>
            <Button onClick={onUpdateHandler} className='bg-green-700'>Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default EditChapters
