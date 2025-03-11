"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { IUserData } from '../SignUp/page'




function SignIn() {

  const [inputPass, setInputPass] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setInputEmail(event.target.value)
  }

  function handlePassWord(event: React.ChangeEvent<HTMLInputElement>) {
    setInputPass(event.target.value)
  }
  const router = useRouter()

  const userData: IUserData = {
    id: Math.floor(Math.random() * 1000),
    email: inputEmail.trim(),
    password: inputPass.trim()
  }

  async function GetDataSignIn() {
    const request = await fetch("http://localhost:8000/Users")
    const respons = await request.json() as IUserData[]


    if (respons && Array.isArray(respons)) {

      const dataIn = respons.some(user => user.email === userData.email && user.password === userData.password)

      if (dataIn) {
        router.push("/")
      } else {
        router.push("/SignUp")
      }
    }
  }

  return (
    <section style={{ backgroundImage: `url("/Images/SignIn(1).webp")` }} className='bg-cover w-[1540px] h-[729px] flex items-center justify-center'>
      <div className='w-[364px] h-[364px] bg-zinc-900 text-white rounded-lg flex flex-col items-start ml-[57px] border-2 border-solid border-[#DF2144] p-5 '>
        <h1 className='text-3xl mb-7'>Sign In</h1>
        <input type="email" placeholder='Email or mobile number' className='signUp text-[#6a1928] p-5' value={inputEmail} onChange={(event) => handleEmail(event)} />
        <input type="password" placeholder='password' className='signUp text-[#6a1928] p-5' value={inputPass} onChange={(event) => handlePassWord(event)} />
        <button className='signUp bg-[#830018] flex items-center justify-center p-5' onClick={() => GetDataSignIn()}><Link href="/">Sign In</Link></button>
        <div className='flex items-center w-[290px] gap-1 ml-4'>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div className='flex items-center justify-center mt-4 text-base ml-4'>
          <p className='text-[#808080]'>New to Site?    <Link href="/SignUp" className='text-[#007bff]'>Sign Up</Link></p>
        </div>
      </div>
    </section>
  )
}

export default SignIn