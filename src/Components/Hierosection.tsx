"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Image from 'next/image';

export interface IDataResult {
  id: string,
  title: string,
  image: string,
  genre: string,
  points: string,
  time: string,
  summary: string
}


const Hierosection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [data, setData] = useState<IDataResult[]>([])

  async function ChangeStae() {
    const result = await fetch("http://localhost:8000/HieroSection");
    const fetchData = await result.json() as IDataResult[];

    setData(fetchData)
  }

  useEffect(() => {
    ChangeStae()
  },[])

  function nextSlide() {
    setCurrentIndex((preIndex) => (preIndex + 1) % data.length)
    console.log("hello")
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length)
    console.log("hello")
  }


  if(!data.length) {
    return <p>Loading...</p>
  }

  return (
    <section key={data[currentIndex]?.id} style={{ backgroundImage: `url("${data[currentIndex]?.image}")` }} className={`h-[809px] max-w-[1519px] bg-cover bg-no-repeat parentElement`}>
      <Navbar />
      <div className='w-[342px] h-[420px] text-center px-6 pt-6 pb-4 rounded-[40px] divSection '>
        <h1 className='font-bold text-3xl mb-6'>{data[currentIndex]?.title}</h1>
        <h3 className='text-2xl'>Summary</h3>
        <p>{data[currentIndex]?.summary}</p>
        <h3 className='text-2xl mt-5'>Gener</h3>
        <p>{data[currentIndex]?.genre}</p>
        <div className='h-8 flex text-center justify-around p-2'>
          <div className='flex gap-2 items-center'>
            <Image src="/Images/Clock.png" alt="Hours" width={24} height={24} />
            <p>{data[currentIndex]?.time}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <Image src="/Images/IMDb.png" alt="Points" width={24} height={24} id='IMDB'/>
            <p>{data[currentIndex]?.points}/10</p>
          </div>
        </div>
      </div>
      <button className='w-[342px] h-10 mt-8 rounded-2xl relative top-36 left-[1083px] redBtn'>View all</button>
      <div className='flex items-center gap-4 relative top-24 left-[578px]'>
        <Image alt='Flash' src="/Images/Frame 313.png" width={48} height={48}  className='flesh cursor-pointer' onClick={() => nextSlide()} />
        <div className='flex gap-3'>
          {
            data.map((image) => (
              <Image key={image.id} alt='vector' src={`${image.id === data[currentIndex]?.id ? "/Images/Ellipse 16.png" : "/Images/Ellipse 14.png"}`} width={26} height={26} id='points'/>
            ))
          }
        </div>
        <Image alt='Flash' src="/Images/Frame 312.png" width={48} height={48} className='flesh cursor-pointer' onClick={() => prevSlide()} />
      </div>
    </section>
  )
}
export default Hierosection;