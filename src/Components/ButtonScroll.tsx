"use client"

import React from 'react';
import Image from 'next/image';



const handleScroll = (event : React.MouseEvent<HTMLImageElement> , id : string) => {
  const scrollPart = document.querySelector(`#${id}`) as HTMLElement

  
  if(event.currentTarget.classList.contains("showLeft")){
    scrollPart.style.right = "-930px";
    console.log("hello")
  }else if (event.currentTarget.classList.contains("showRight")) {
    scrollPart.style.right = "0px"
  }
}


function ButtonScroll({id} : {id :string}) {
  return (
    <div className='flex items-center gap-2'>
      <Image src="/Images/Frame 313.png" alt='flesh' width={48} height={48} className='flesh cursor-pointer showLeft' onClick = {(event) => handleScroll(event , id)}/>
      <Image src="/Images/Frame 312.png" alt='flesh' width={48} height={48} className='flesh cursor-pointer showRight' onClick = {(event) => handleScroll(event , id)}/>
    </div>
  )
}

export default ButtonScroll