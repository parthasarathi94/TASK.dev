import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-evenly bg-purple-600 text-white py-2'>
        <ul className='flex gap-80 mx-10'>
            <li className='cursor-pointer transition-all'>Copyright © 2024 Tailwind Labs Inc.</li>
            <li className='cursor-pointer transition-all'>Trademark policy</li>
            <li className='cursor-pointer transition-all'>Made with ❤ by <a href="https://www.instagram.com/im_parthasarathi/"target='_blank'>Partha Sarathi Phukon</a></li>
        </ul>
    </footer>
  )
}

export default Footer
