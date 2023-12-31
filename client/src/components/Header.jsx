import React from 'react'
import images from '../constants/images';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Voters", type: "link", href: "/voters" },
    
]

const NavItem = ({ item }) => {

    const [dropdown, setDropDown] = useState(false);
    const toggleDropDownHandler= ()=>{
        setDropDown((curState)=>{
            return !curState;
        })
    }

        return (
            <li className='relative group'>
                {item.type==='link'?(<>
                <Link to={item.href} className='px-4 py-2'>{item.name}</Link>
                <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span></>)
                :
                (<div className='flex flex-col items-center'>
               <button
                className="px-4 py-2 flex gap-x-1 items-center"
                onClick={toggleDropDownHandler}
              >
                <span>{item.name}</span>
                <AiOutlineDown/>
              </button>
                    <div
                className={`${
                  dropdown ? "block" : "hidden"
                } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
              >
      <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
    {item.items.map((page,index)=>(

        <Link
    key={index}
        to={page.href} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
    {page.title}
        </Link>


    ))}
    </ul>
                </div>
                </div>)}

            </li>
        );
    }


const Header = () => {
    const navigate = useNavigate();
    const [navIsVisible, setNavIsVisible] = useState(false);
    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    }

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-[#E6E6FA]">
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
            <Link to="/">
                    <img
                        src={images.Logo}
                        alt="logo"
                        className="w-16 object-cover rounded-full border-4 border-gray-300 hover:border-blue-200 shadow-lg hover:shadow-xl transition duration-300"
                    />
                </Link>
                <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >

                    <ul className='flex flex-col items-center gap-y-5 lg:flex-row gap-x-2 font-semibold text-white lg:text-dark-soft'>
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item}/>
                        ))}
                    </ul>
                    <button onClick={()=>navigate('/register')}
                     className='border-2 mt-5 lg:mt-0 border-blue-500 px-6 py-2 rounded-full text-full-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>
                        Register
                        </button>

                </div>

            </header>

    </section>
  )
}

export default Header
