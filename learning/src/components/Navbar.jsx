import { Cross, User2, User2Icon, CircleUserRound, CircleX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import user from '../data/user.json'
const Navbar = () => {
    const navlist = [{
        title: "Home",
        path: "/"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "FAQ",
        path: "/faq"
    }
    ]
    const [visible, setvisible] = useState(false)

    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center z-0 bg-gradient-to-r from-neutral-700 to-neutral-950 shadow-md shadow-black sticky top-0">
                <div className="w-[95%] h-full flex justify-center items-center flex-row">
                    <div className='flex h-full justify-start items-center font-bold text-xl text-white '>
                        <ul className='w-[95%] list-none flex flex-row justify-center gap-x-10'>
                            {navlist.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.path} className='text-white '>{item.title}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='w-3/4 flex  h-full justify-end items-center'>
                        <CircleUserRound className='cursor-pointer ml-2 h-10 w-10 text-white hover:bg-black  hover:border-zinc-600 hover:text-white hover:bg-black' onClick={() => setvisible(true)} />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center'>
                            <div className='w-1/2 h-1/2 bg-white rounded-lg flex flex-col justify-center items-center'>
                                <div className='w-full h-1/6 flex justify-end items-start pr-[2%] pt-[2%]'>
                                    <CircleX className='cursor-pointer h-10 w-10 text-black hover:text-red-500' onClick={() => setvisible(false)} />
                                </div>
                                <ProgressBar completed={60} className='w-[80%]' />
                                <div className='w-full h-5/6 flex flex-col justify-center items-center'>
                                    <div className='w-full h-5/6 flex flex-row justify-center items-center'>
                                        <div className='w-2/6 flex flex-col'>
                                            <label className='text-2xl font-bold flex justify-start items-start m-2 p-1'>Name:</label>
                                            <label className='text-2xl font-bold flex justify-start items-start m-2 p-1'>Email :</label>
                                        </div>
                                        <div className='w-5/6 flex flex-col'>
                                            <h1 className='text-2xl font-bold flex border-2 border-slate-600 bg-slate-300 rounded-xl text-slate-500 p-1 m-2'>{user.name}</h1>
                                            <h1 className='text-2xl font-bold flex border-2 border-slate-600 bg-slate-300 rounded-xl text-slate-500 p-1 m-2'>{user.email}</h1>
                                        </div>
                                    </div>
                                </div>
                                <button className='bg-black text-white px-2 py-1 rounded-lg mt-5'>Logout</button>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Navbar