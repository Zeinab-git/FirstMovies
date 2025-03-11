import React from 'react';
import Image from 'next/image';


interface IDataBaner {
    image: string,
    title: string,
    summary: string,
    genre: string,
    time: string,
    points: string
}

async function Baner({ id }: { id: string }) {
    const result = await fetch(`http://localhost:8000/Baner/${id}`)
    const data = await result.json() as IDataBaner
    return (
        <section style={{ backgroundImage: `url("${data.image}")`, backgroundSize: "cover", width: "1252px", height: "440px" }}>
            <div className='w-[350px] h-[375px] flex flex-col items-baseline bg-[#437cda80] text-[#ffffff] p-4 rounded-[45px] m-12'>
                <h1 className='font-bold text-3xl mb-6'>{data.title}</h1>
                <h3 className='text-2xl'>Summary</h3>
                <p>{data.summary}</p>
                <div className='flex flex-col items-center mt-5 pl-[67px] justify-center'>
                    <div className='flex items-center text-2xl'>
                        <h3 className=''>Gener:</h3>
                        <p>{data.genre}</p>
                    </div>
                    <div className='h-8 flex text-center justify-around p-2'>
                    <div className='flex gap-2 items-center'>
                        <Image src="/Images/Clock.png" alt="Hours" width={24} height={24} />
                        <p>{data.time}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src="/Images/IMDb.png" alt="Points" width={24} height={24} id='IMDB' />
                        <p>{data.points}/10</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Baner;