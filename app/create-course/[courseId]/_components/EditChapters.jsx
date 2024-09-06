import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import {HiPencilSquare} from "react-icons/hi2"
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

function EditChapters({course, index}) {

    const Chapters = course?.courseOutput?.chapter;
    const [name, setName] = useState();
    const [about, setAbout] = useState();

    useEffect(() => {
        setName(Chapters[index].name);
        setName(Chapters[index].about);
    })

    const onUpdateHandler = () => {
        course.courseOutput.course.chapter[index].name = name;
        course.courseOutput.course.chapter[index].about = about;
        console.log(course);
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
            <Input defaultValue={Chapters[index].name}
            onChange={(event)=>setName(event.target.value)}/>
      </div>
       <div>
           <label>Description</label>
           <Textarea className='h-40' defaultValue={Chapters[index].about} 
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
