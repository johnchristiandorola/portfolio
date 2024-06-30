import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center mx-auto my-auto'>
      <div className='flex justify-between gap-20  max-w-6xl items-center h-screen p-6'>
        <h1 className='scroll-m-20 text-7xl md:text-8xl font-extrabold lg:text-9xl hover:-translate-y-5 duration-500 hover:shadow-xl shadow-slate-700 rounded-full  hidden lg:block tracking-tighter'>JCDev</h1>
       <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl font-extrabold md:text-5xl lg:tracking-tighter lg:text-6xl">
              John Christian Dorola
            </h1>
            <p className="text-lg lg:text-xl font-bold">
              Front-End Developer | Flutter Developer
            </p>
            <p className="mt-2 lg:text-lg  text-center lg:text-left">
              I am a Front-End Developer and aspiring Android Developer based in
              the Philippines. I enjoy building web applications and mobile
              applications.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Hero