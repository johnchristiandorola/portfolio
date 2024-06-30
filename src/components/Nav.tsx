import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ToggleMode'

const Nav = () => {
  return (
    <div className='flex flex-col items-center border-b mb-5 py-5 px-7 bg-secondary fixed w-full'>
        <div className='flex justify-between items-center max-w-7xl w-full'>
            <div>
          <Link href={"/"} className='hover:bg-none hover:border-none p-0 rounded-none '>
          <h1 className='font-extrabold text-xl'>JCDev</h1>
          </Link>
        </div>

            <div className='flex gap-4'>
              <div className='flex gap-5 items-center'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Skills</Link>
                <Link href={'/'}>Project</Link>
                <Link href={'/'}>Contact</Link>
            </div>
            <div>
                <ModeToggle/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Nav