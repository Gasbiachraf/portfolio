
import './header.sass'

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

import { Link } from 'react-scroll';
import logo from '../assets/img/logo-portfolio.png'
import logo2 from '../assets/img/logo2AGASBI.png'
import { useNavigate } from 'react-router-dom';







export const Componentheader = () => {
    const navigate=useNavigate()

    return (
        <Navbar fluid className=' lg:pl-40 lg:pr-80 bg-[#032a31] text-[#36a99a]   fixed w-[100%] py-3  achraf'>
            <NavbarBrand  >
                <div onClick={()=>{navigate('/portfolio')}} smooth={true} duration={500} ><img className='w-[70px]' src={logo} alt="" /></div>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className=''>
                <Link className='  hover:text-[#f2fdf7] hover:scale-110 duration-200 text-xl cursor-pointer max-[430px]:pl-4' to='home' smooth={true} duration={500}  >Home</Link>
                <Link className='  hover:text-[#f2fdf7] hover:scale-110 duration-200 text-xl cursor-pointer max-[430px]:pl-4' to='about' smooth={true} duration={500} >About</Link>
                <Link className='  hover:text-[#f2fdf7] hover:scale-110 duration-200 text-xl cursor-pointer max-[430px]:pl-4' to='skills' smooth={true} duration={500} >Skills</Link>
                <Link className='  hover:text-[#f2fdf7] hover:scale-110 duration-200 text-xl cursor-pointer max-[430px]:pl-4' to='projects' smooth={true} duration={500} >Projects</Link>
                <Link className='  hover:text-[#f2fdf7] hover:scale-110 duration-200 text-xl cursor-pointer max-[430px]:pl-4 ' to='contact' smooth={true} duration={500}  >Contact</Link>
            </NavbarCollapse>
        </Navbar>
    );
}

