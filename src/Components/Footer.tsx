import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <section className='bg-[#1D1D1D] text-white h-[256px] w-full flex items-center justify-around rounded-[86px] border-2 border-solid border-white'>
            <div className='flex flex-col gap-8 w-[500px] h-[250px] justify-center'>
                <div className='flex items-center text-[18px] gap-6'>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms & Conditions</Link>
                    <Link href="/">Help & Support</Link>
                </div>
                <div className='flex items-center justify-evenly'>
                    <Image src="/Images/Facebook.png" alt='FaceBook' width={36} height={36}  className='logo'/>
                    <Image src="/Images/Instagram.png" alt='Instagram' width={36} height={36}  className='logo'/>
                    <Image src="/Images/Twitter.png" alt='Twitter'  width={36} height={36} className='logo'/>
                    <Image src="/Images/Telegram.png" alt='Telegram'  width={36} height={36} className='logo'/>
                </div>
            </div>
            <Image src="/Images/Logo(1).webp" alt="Logo of site" width={175} height={150} className='rounded-[100%]'/>
        </section>
    )
}

export default Footer