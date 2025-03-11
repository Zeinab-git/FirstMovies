import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ButtonScroll from './ButtonScroll';

interface IPropMain {
    Title: string,
    url : string, 
    id : string
}

interface IGetData {
    id: string,
    title: string,
    image: string,
    genre: string,
    points: string,
    time: string
}


async function MainSection({ Title , url , id}: IPropMain) {


    const result = await fetch(url)
    const data = await result.json() as IGetData[]

    return (
        <section className='w-[1252px] h-[570px] flex flex-col items-center text-white mt-20'>
            <div className='flex items-center justify-between w-[1252px]'>
                <h3 className='text-3xl'>{Title}</h3>
                <ButtonScroll id={id}/>
            </div>
            <div className='flex w-[3016px] items-center gap-9 p-10 relative scrollPart' id={id}>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className='w-[190px] h-[320px]'>
                                <div style={{ backgroundImage: `url("${item.image}")`, height: "235px", backgroundSize: "cover" }}></div>
                                <div className='flex items-center justify-between p-2'>
                                    <div className='flex items-center gap-1'>
                                        <Image src="/Images/IMDb.png" alt='IMDb' width={16} height={16} className='IMDb' />
                                        <p>{item.points}</p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <Image src="/Images/clock(yellow).png" alt='clock' width={16} height={16} className='IMDb' />
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                                <h2 className='text-center text-xl'>{item.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <button className=' flex w-52 items-center justify-center gap-2 text-2xl rounded-xl text-[#1EB7E8] border-2 border-solid border-[#1EB7E8] p-2 mt-6'>
                <Link href={"/"}>Show All</Link>
                <Image src="/Images/ooui_next-ltr.png" alt='flesh' width={16} height={16} className='IMDb' />
            </button>

        </section>
    )
}

export default MainSection;