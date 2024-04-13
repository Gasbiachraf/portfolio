import resto from '../../../assets/img/resto.png'
import currency from '../../../assets/img/currency.png'
import shopSite from '../../../assets/img/shopSite.png'
import docteur from '../../../assets/img/docteur.png'
import { useState } from 'react'

import { Card } from 'flowbite-react';


export const ProjectsSection = () => {
    const [projects, setProjects] = useState([
        {
            paragraph: 'Explore our varied online selection of trendy, high-quality products to suit every style and budget.',
            titre: 'Store website',
            img: shopSite,

        },
        {
            paragraph: 'Medical practice dedicated to your health, offering personalized consultations and attentive care.',
            titre: 'Medical practice website',
            img: docteur,

        },
        {
            paragraph: 'Explore the selection of delicious dishes online and discover the creators of these culinary masterpieces.',
            titre: 'Restaurant website',
            img: resto,

        },
        {
            paragraph: 'Discover current cryptocurrency trends with real-time analytics and up-to-date data using API.',
            titre: 'Crypto-currency website',
            img: currency,

        }
    ])

    return (
        <section name="projects" className="bg-[#032a31] text-[#a9cfd0] w-full pt-16 overflow-hidden">
            <p className="text-6xl text-[#36a99a] text-center max-[430px]:text-5xl pb-16">Projects</p>
            <div className='flex justify-center pb-6 '>
                <div className='flex flex-wrap   gap-y-10 gap-x-10  w-[70vw] max-[430px]:w-[90%] max-[430px]:px-0   '>
                    {
                        projects.map((element, index) =>
                            <>
                                <Card key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    className="max-w-lg w-[48%] max-[430px]:w-[100%] bg-[#032a31] shadow-lg shadow-[#36a99a]  border-0 "
                                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                                    imgSrc={element.img}
                                >
                                    <h5 className="text-2xl font-bold tracking-tight text-[#36a99a] dark:text-white">
                                        {element.titre}
                                    </h5>
                                    <p className="font-normal text-[#a9cfd0] dark:text-gray-400">
                                        {element.paragraph}
                                    </p>
                                </Card>
                            </>)
                    }


                </div>
            </div>



        </section>
    );
};

