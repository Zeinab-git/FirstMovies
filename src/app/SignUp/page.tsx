"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Modal from '@/Components/Modal';

export interface IUserData {
    id: number;
    email: string;
    password: string
}



function SignUp() {

    const [inputPass, setInputPass] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const router = useRouter()


    // Modal Part
    const [isOpen, setIsOpen] = useState(false);
    function onclose() {
        setIsOpen(false)
    }

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setInputEmail(event.target.value)
    }

    function handlePassWord(event: React.ChangeEvent<HTMLInputElement>) {
        setInputPass(event.target.value)
    }

    async function PostDataSingUp() {

        const userData: IUserData = {
            id: Math.floor(Math.random() * 1000),
            email: inputEmail.trim(),
            password: inputPass.trim()
        }

        const request = await fetch("http://localhost:8000/Users")
        const respons = await request.json() as IUserData[]


        if (respons && Array.isArray(respons)) {

            const dataIn = respons.some(user => user.email === userData.email && user.password === userData.password)

            if (dataIn) {
                router.push("/SignIn")
            } else if (!dataIn && userData.email.length >= 6 && userData.email.length <= 30 && userData.password.length >= 8) {
                const result = fetch("http://localhost:8000/Users", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                console.log(result)
            } else {
                router.push("/SignUp")
                setIsOpen(true);
                setTimeout(() => {
                    setIsOpen(false);
                }, 4000)
            }
        }

    }
    return (
        <section style={{ backgroundImage: `url("/Images/signUp(1).webp")` }} className='bg-cover w-[1540px] h-[729px] flex items-center justify-center'>
            <div className='w-[350px] h-[350px] bg-zinc-900 text-white rounded-lg flex flex-col items-start ml-[71px] border-2 border-solid border-[#DF2144] p-5 '>
                <h1 className='text-3xl mb-7'>Sign Up</h1>
                <input type="email" placeholder='Email or mobile number' className='signUp text-[#6a1928] p-3' value={inputEmail} onChange={(event) => handleEmail(event)} />
                <input type="password" placeholder='password' className='signUp text-[#6a1928] p-3' value={inputPass} onChange={(event) => handlePassWord(event)} />
                <button className='signUp bg-[#830018] flex items-center justify-center p-3' onClick={() => PostDataSingUp()}><Link href="/">Sign Up</Link></button>
                <div className='flex items-center w-[290px] gap-1'>
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <div className='flex items-center justify-center mt-4 text-base'>
                    <p className='text-[#808080]'>Already have an account?    <Link href="/SignIn" className='text-[#007bff]'>Sign In</Link></p>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onclose}>
                <div>
                    <p>Email or password is incrroct</p>
                </div>
            </Modal>
        </section>
    )
}

export default SignUp;