import About from '../../../assets/img/About3.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './firstSection.sass'
import { Link } from 'react-router-dom';
export const AboutSection = () => {
    return (

        <section name="about" className='flex justify-center  bg-[#032a31] w-full pt-16 overflow-hidden '>
            <div className='w-[80%] max-[430px]:w-[90%] flex justify-between  flex-col  '>
                <div className='flex max-[430px]:flex-col-reverse mt-4 '>
                    <div data-aos="fade-down" data-aos-duration="1500" className='mb-2   pl-4 max-[430px]:pl-0'>
                        <img className='w-[80%]  max-[430px]:w-full max-[430px]:pt-6' src={About} alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className='w-[100%] pl-4 max-[430px]:pl-4  max-[430px]:px-4   text-[#a9cfd0]'>
                        <p className='text-6xl  text-[#36a99a] text-center mb-8 max-[430px]:mb-8 max-[430px]:text-5xl'>About me</p>
                        <p className=' text-xl max-[430px]:text-lg max-[430px]:pr-6'>Hey there! I'm a web developer who thrives on turning ideas into interactive experiences. With a focus on both frontend and backend development, I bring websites to life with clean code and sleek designs. I'm passionate about creating intuitive user interfaces that engage and inspire. Let's work together to build something amazing!</p>
                        <div className=' max-[430px]:flex-col-reverse   max-[430px]:flex'>
                            <div className='flex flex-col pl-3 max-[430px]:pl-0  pt-8  max-[430px]:pt-4  max-[430px]:gap-2  lg:text-xl '>
                                <div className=' flex w-[100%]  gap-4 lg:mb-3'>
                                    <p className='flex items-center text-[#36a99a]'> <FaLocationDot className='mr-2   text-[#36a99a]' /> Location : </p>
                                    <p>20400 Casablanca , Morocco </p>
                                </div>
                                <div className=' flex w-[100%]  gap-4 lg:mb-3'>
                                    <p className='flex items-center text-[#36a99a]'> <MdOutlineMail className='mr-2 text-[#36a99a] ' /> Email : </p>
                                    <p className='max-[430px]:pl-5 pl-7'>gasbi.achraf@gmail.com </p>
                                </div>
                                <div className=' flex w-[100%]  gap-4 lg:mb-3'>
                                    <p className='flex items-center text-[#36a99a]'> <FaPhoneAlt className='mr-2  text-[#36a99a]' /> Phone : </p>
                                    <p className='max-[430px]:pl-3 pl-4'>+212 689226137</p>
                                </div>
                                <div className=' flex w-[100%]  gap-4 lg:mb-3'>
                                    <p className='flex items-center text-[#36a99a]'> <FaRegCalendarAlt className='mr-2  text-[#36a99a]' /> Age : </p>
                                    <p className='pl-10 max-[430px]:pl-8'> 24 years</p>
                                </div>
                            </div>
                            {/* <div className='flex flex-col pl-3 max-[430px]:pl-0    max-[430px]:mt-2   max-[430px]:gap-2 -reverse max-[430px]:pt-6 lg:text-xl '>
                            </div> */}
                        </div>
                        <div className='flex justify-center mt-8 max-[430px]:mt-8'>
                            <div className=' flex justify-around max-[430px]:justify-evenly max-[430px]:pr-4 w-[60%] max-[430px]:w-[100%] text-4xl '>
                                <Link target='_blank' to="https://www.linkedin.com/in/achraf-gasbi-02210823a/"><ImLinkedin className='rounded-full hover:text-[#36a99a] duration-200 ' /></Link>
                                <Link target='_blank' to="https://github.com/Gasbiachraf"><FaGithub className='rounded-full hover:text-[#36a99a] duration-200 ' /></Link>
                                <Link target='_blank' to="https://twitter.com/gasbi_achraf"><FaXTwitter className='rounded-full bg-[#a9cfd0] text-[#032a31] p-1 hover:bg-[#36a99a] duration-200' /></Link>
                                <Link target='_blank' to="https://www.instagram.com/achraf_gasbi/"><FaInstagram className='rounded-full bg-[#a9cfd0] text-[#032a31] p-1 hover:bg-[#36a99a] duration-200 ' /></Link>
                                <Link target='_blank' to="https://in.pinterest.com/achrafgasbi/"><FaPinterest className='rounded-full hover:text-[#36a99a]  duration-200' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

