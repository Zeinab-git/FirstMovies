import React from 'react'

function Error() {
  return (
    <section style={{backgroundImage : `url("/Images/Error.webp")`}} className='w-[1539px] h-[729px] bg-cover flex items-center'>
        <div className='w-[450px] h-[400px] text-white bg-zinc-900 m-12 flex flex-col items-center justify-center border-4 border-solid border-[#7e0017] rounded-[34px]'>
            <h2 className='text-[50px]'>Error</h2>
            <h1 className='text-[150px] neon'>404</h1>
            <span className='text-center text-[20px]'>The movie you are looking for is not in our archive.Maybe its director forgot to make it.</span>
        </div>
    </section>
  )
}

export default Error