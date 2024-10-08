import React from 'react'
import { Button } from '@/components/ui/button'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        <p className='text-3xl font-bold'>Logo</p>
        <ul className='flex items-center gap-8'>
            <li>Home</li>
            <li>About Us</li>
            <li>Serivces</li>
            <li>Our Works</li>
        </ul>
        <Button>Contact Us</Button>
    </div>
)
}

export default Navbar