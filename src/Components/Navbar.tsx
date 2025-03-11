import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import vector from "../../public/Images/Vector(1).png";
import search from "../../public/Images/Search.png"



function Navbar() {
  return (
    <section className='navbar'>
      <div className='flex gap-4 w-1/2 items-center justify-around font-bold'>
        <Link href="/">Home</Link>
        <Link href="/Moveis" className='flex items-center gap-3'>Movies<Image src={vector} alt='vector' /></Link>
        <Link href="/Series" className='flex items-center gap-3'>Series<Image src={vector} alt='vector' /></Link>
        <Link href="/Actors" className='flex items-center gap-3'>Actors<Image src={vector} alt='vector' /></Link>
        <Link href="/AboutUs">About Us</Link>
      </div>
      <div className='flex w-1/2 items-center justify-around '>
        <div className='flex gap-3 items-center'>
          <Image alt='search' src={search} className='w-7 h-7'/>
          <input type="text" placeholder='Serach ...' className='w-64 h-9 rounded-xl' />
        </div>
        <div className='divBtn'>
          <button className='btnNavbar redBtn'><Link href="/SignUp">Sign up</Link></button>
          <button className='btnNavbar grayBtn'><Link href="/SignIn">Sign in</Link></button>
        </div>
      </div>
    </section>
  )
}


export default Navbar