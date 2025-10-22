import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className="header flex justify-between px-10 pb-3 pt-2 bg-[#36363ada]">
            <h1 className='text-[#dfdc2a] text-3xl font-bold'>TypeTrack</h1>
            <div className="time flex font-bold gap-2">
              <button className='bg-[#e4e27b] px-2'>10sec</button>
              <button className='bg-[#e4e27b] px-2'>20sec</button>
              <button className='bg-[#e4e27b] px-2'>30sec</button>
            </div>
            <div className="level flex gap-2 font-bold">
              <button className='bg-[#e4e27b] px-2'>Easy</button>
              <button className='bg-[#e4e27b] px-2'>Medium</button>
              <button className='bg-[#e4e27b] px-2'>Hard</button>
            </div>
          </div>
    </div>
  )
}

export default Navbar
