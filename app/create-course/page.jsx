'use client'
import React,{useState, useContext, useEffect} from 'react'
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from 'react-icons/hi2' 
import { Button } from '@/components/ui/button';
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOptions from './_components/SelectOptions';
import { UserInputContext } from '../_context/UserInputContext';
import {GenerateCourseLayout_AI} from '@/configs/AiModel';
import LoadingDialog from './_components/LoadingDialog';


function CreateCourse() {
  const StepperOptions=[
    {
      id:1,
      name:'Category',
      icon:<HiMiniSquares2X2/>
    },
    {
      id:2,
      name:'Tpoic & Desc',
      icon:<HiLightBulb/>
    },
    {
      id:3,
      name:'Options',
      icon:<HiClipboardDocumentCheck/>
    }
  ]

  const {userCourseInput, setUserCourseInput} = useContext(UserInputContext);
  const [loading,setLoading]=useState(false);
  const [activeIndex,setActiveIndex]=useState(0);

  useEffect (() => {
    // console.log(userCourseInput)
  },[userCourseInput])

// used to check Next button enable or disable status

  const checkStatus=()=>{
    if(userCourseInput?.length==0)
      {
      return true;
    }
    else if(activeIndex == 0 && (userCourseInput?.category?.length == 0 || userCourseInput?.category == undefined)){
      return true;
    }
    else if(activeIndex == 1 && (userCourseInput?.topic?.length == 0 || userCourseInput?.topic == undefined )){
      return true;
    }
    else if(activeIndex == 2 && (userCourseInput?.level == undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapter == undefined || userCourseInput?.noOfChapter?.length == 0)){
      return true;
    }
    return false;
  }

  const GenerateCourseLayout=async()=>{
    setLoading(false);
    const BASIC_PROMPT='Generate A Course Tutorial on following detail with course Name, description, along with Chapter Name, about, duration:';
    const USER_INPUT_PROMPT='Category:'+userCourseInput?.category+',Topic:'+userCourseInput?.topic+', Level: '+userCourseInput?.level+', Duration:'+userCourseInput?.duration+', NoOfChapters:'+userCourseInput?.noOfChapter+' , in json format';
    const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT)
    const result=await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(result.response?.text());
    console.log(JSON.parse(result.response?.text()));
    setLoading(false);
  }
  return (
    <div>
      {/* Stepper */}
      <div className='flex flex-col justify-center items-center mt-10'>
       <h2 className='text-4xl text-green-700 font-medium'>Create Course</h2> 
       <ul className='flex mt-10'>
          {StepperOptions.map((item,index) => (
              <li className='flex items-center'>
                  <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                    <div className={`bg-gray-200 p-3 rounded-full text-white ${activeIndex>=index && `bg-green-400`}`
                    }>{item.icon}</div>
                    <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                  </div>
                  {index!=StepperOptions?.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${activeIndex-1>=index && `bg-green-400`}`}></div>}
              </li>
            ))}
      </ul>
      </div>
      <div className='ox-10 md:px-20 lg:px-44 mt-10'>

        {/* Component */}
        {activeIndex==0? <SelectCategory/>:
        activeIndex==1? <TopicDescription/>:
        <SelectOptions/>}
        {/* Next previous Button */}
        <div className='flex justify-between mt-10'>
          <Button variant='outline' disabled={activeIndex==0} onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
          {activeIndex<2 && <Button disabled={checkStatus()} className='bg-green-600' onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
          {activeIndex==2 && <Button disabled={checkStatus()} className='bg-green-600' onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button>}
        </div>
        </div>
        <LoadingDialog loading={loading}/>
    </div>
  )
}

export default CreateCourse;
