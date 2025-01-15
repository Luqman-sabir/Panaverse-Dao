import Image from 'next/image';
import React from 'react'
import logo from '/public/images/panaverse-logo.webp'
import Link from 'next/link';
function Header() {
  return (
    <div className='flex items-center justify-between py-4 sticky top-0 z-10 bg-white' >
        <Image className='' src={logo} alt='logo' width={100} height={100} />
    <div className='flex gap-4 font-medium text-lg'>
        <Link href={'/'} >Home</Link>
        <Link href={'/'} >Courses</Link>
    </div>
    
    </div>
  )
}

export default Header;