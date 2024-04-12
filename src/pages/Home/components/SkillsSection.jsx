import { useState } from "react";
import html from '../../../assets/img/HTML.png'
import css from '../../../assets/img/CSS.png'
import js from '../../../assets/img/js.png'
import gitBash from '../../../assets/img/GitBash.png'
import bootstrap from '../../../assets/img/Bootstrap.png'
import react from '../../../assets/img/React.png'
import tailwind from '../../../assets/img/Tailwind.png'




export const SkillsSection = () => {
    const [skillsLogo, setSkillsLogo] = useState([
        {
            titre: "HTML5",
            img: html
        },
        {
            titre: "CSS3",
            img: css
        },
        {
            titre: "Javascript",
            img: js
        },
        {
            titre: "GitBash",
            img: gitBash
        },
        {
            titre: "Bootstrap",
            img: bootstrap
        },
        {
            titre: "React.js",
            img: react
        },
        {
            titre: "Tailwind",
            img: tailwind
        },
        
    ])
    return (
        <section name="skills" className="bg-[#032a31] text-[#a9cfd0] pt-16">
            <p className="text-6xl text-[#36a99a] text-center max-[430px]:text-5xl">Skills</p>
            <div className="flex max-[430px]:flex-wrap pt-10 px-20 max-[430px]:px-20 max-[430px]:gap-x-10  max-[430px]:gap-y-8">

                {skillsLogo.map((element, index) => 
                <>
                <div className="w-[100%] max-[430px]:w-[42%] flex flex-col items-center  ">
                    <img className="w-[7vw] h-[15vh] max-[430px]:w-[100%] max-[430px]:h-[18vh] shadow-lg shadow-[#36a99a] rounded-3xl p-3" src={element.img} alt="" />
                    <p className="text-2xl pt-4">{element.titre}</p>
                </div>

                </>
                )

                }
            </div>
        </section>
    );
};

