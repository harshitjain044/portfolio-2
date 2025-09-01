import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
     <>
            <div className='flex justify-between bg-[#F9F6F3] text-[#1C352D] z-10 cursor-pointer p-4 shadow-xl'>
                <Link
                    to='/'
                    className='font-extrabold text-red-700 text-2xl'
                    >
                    Harshit jain
                </Link>
                <div className='flex gap-6 font-semibold text-[#1C352D] text-xl'>
                    <NavLink
                        to='/'
                        className= {({isActive}) =>`${isActive ? "text-red-700" : ""}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({isActive}) => `${isActive ? "text-red-700" : ""}`}
                        >
                        Projects
                    </NavLink>
                    <NavLink
                        to='/skills'
                        className= {({isActive}) =>`${isActive ? "text-red-700" : ""}`}
                    >
                        Skills
                    </NavLink>
                     <NavLink
                        to='/experiences'
                        className={({isActive}) =>`${isActive ? "text-red-700" : ""}`}
                    >
                        Experiences
                    </NavLink>
                    <NavLink
                        to='contact'
                        className={({isActive}) =>`${isActive ? "text-red-700" : ""}`}
                    >
                        Contact
                    </NavLink>
                   
                </div>
                <div className='text-[#1C352D]  flex gap-6 font-semibold text-xl'>
                    <a
                        href = "https://www.canva.com/design/DAGudvwkBfg/maBYMu5wV3LqjnBVYAzQnA/edit?utm_content=DAGudvwkBfg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='border-2 border-orange-700 px-4 py-1 rounded-2xl hover:bg-orange-700 hover:text-white duration-200'
                    >
                        Resume
                    </a>
                    <Link
                        to="/contact"
                        className='border-2 border-orange-700 px-4 py-1 rounded-2xl bg-orange-700 hover:bg-orange-800 text-white duration-200'
                    >
                        contact Me
                    </Link>
                </div>
            </div>
        </>
  )
}

export default Header