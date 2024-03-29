import { Link } from 'react-scroll';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './header.sass'

export const CompenentFooter = () => {
    return (

        <>
            <footer className='bg-[#032a31] text-[#a9cfd0] '>
                <div className="pt-16 ">
                    <p className="text-center">&copy;&nbsp; copyright 2024</p>
                </div>
                <div className='flex justify-center pb-8'>
                    <div className=' flex justify-around max-[430px]:justify-evenly w-[10%] pb-4 pt-2 max-[430px]:w-[35%] text-xl '>
                        <Link target='_blank' to="https://www.linkedin.com/in/achraf-gasbi-02210823a/"><ImLinkedin className='rounded-full hover:text-[#36a99a] duration-200 ' /></Link>
                        <Link target='_blank' to="https://github.com/Gasbiachraf"><FaGithub className='rounded-full hover:text-[#36a99a] duration-200 ' /></Link>
                        <Link target='_blank' to="https://twitter.com/gasbi_achraf"><FaXTwitter className='rounded-full bg-[#a9cfd0] text-[#032a31] p-1 hover:bg-[#36a99a] duration-200' /></Link>
                        <Link target='_blank' to="https://www.instagram.com/achraf_gasbi/"><FaInstagram className='rounded-full bg-[#a9cfd0] text-[#032a31] p-1 hover:bg-[#36a99a] duration-200 ' /></Link>
                        <Link target='_blank' to="https://in.pinterest.com/achrafgasbi/"><FaPinterest className='rounded-full hover:text-[#36a99a]  duration-200' /></Link>
                    </div>
                </div>
            </footer>

        </>


    );
};

