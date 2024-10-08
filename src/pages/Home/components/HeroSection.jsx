
import { useContext, useEffect } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/ContextProvider';
import { Link } from 'react-scroll';

import { MdOutlineFileDownload } from "react-icons/md";

import face from '../../../assets/img/face.png'
import face2 from '../../../assets/img/achrafface2.png'
import body from '../../../assets/img/body.png'
import logo from '../../../assets/img/logo-portfolio.png'
import pdf from '../../../assets/pdf/CV_ACHRAF_GASBI.pdf'
import 'aos/dist/aos.css';
import Aos from 'aos';



export const FirstSectionHome = () => {
    // const [test, setTest, test2, setTest2] = useContext(MyContext)

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <link rel="icon" src={logo} />
            <title>Achraf GASBI</title>
            <section name="home" className='bg-[#032a31] text-[#a9cfd0]  flex justify-center  w-full pt-20'>
                <div className='w-[80%] flex justify-between   max-[430px]:flex-col-reverse '>
                    <div data-aos="fade-down-right" data-aos-duration="1500" className=' flex flex-col justify-center w-[50%] max-[430px]:w-full '>
                        <p className='pb-4  text-2xl  '>Hello, </p>
                        <p className='text-6xl max-[430px]:text-4xl pb-4'>I am <span className='text-[#36a99a]'>Achraf GASBI </span></p>
                        <p className='text-6xl max-[430px]:text-4xl pb-4 max-[430px]:pb-0'>Web developer</p>
                        <div className='flex  max-[430px]:gap-0 max-[430px]:flex-col pr-16 max-[430px]:pr-0 pt-8  gap-10'>
                            <Link className='bg-[#36a99a] text-[#032a31] text-center max-[430px]:w-[37vw] py-2  max-[430px]:px-0  px-4 max-[430px]:py-1 justify-center rounded-full text-xl mt-4 cursor-pointer' to='contact' smooth={true} duration={500}><b>Make contact</b></Link>
                            <button className='bg-[#a9cfd0] text-[#032a31] px-5 max-[430px]:w-[37vw] max-[430px]:justify-center max-[430px]:flex  py-2 max-[430px]:py-1 max-[430px]:px-2 rounded-full text-xl mt-4 flex items-center gap-2'><a download href={pdf}><b>Get CV</b></a> <MdOutlineFileDownload className='text-2xl' /></button>
                        </div>
                    </div>
                    <div data-aos="fade-left"  data-aos-duration="1500" className='w-[35%] max-[430px]:w-[90%] max-[430px]:m-auto '>
                            <img  src={face2} alt="" />
                        </div>
                </div>
            </section>
        </>
    );
}
