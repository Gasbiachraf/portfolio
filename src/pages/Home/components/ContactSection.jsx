import { useRef, useState } from 'react';
import contact from '../../../assets/img/Contact.png'
import emailjs from 'emailjs-com'
export const ContactSection = () => {

    const [inputName, setInputName] = useState()
    const [inputEmail, setInputEmail] = useState()
    const [inputNumber, setInputNumber] = useState()
    const [inputMessage, setInputMessage] = useState()

    const form = useRef();

    // ^^ emailjs :
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_cjo42fb', 'template_7cq7149', form.current, '_Iv6kFj6Qr4fyFzwu',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            setInputName("")
            setInputEmail("")
            setInputNumber("")
            setInputMessage("")
    



    };
    // ^^ fin emailjs :



    return (
        <section name='contact' className="bg-[#032a31] text-[#a9cfd0] w-full flex flex-col items-center ">
            <p className="text-6xl text-[#36a99a] text-center pt-16 max-[430px]:text-5xl">Contact Me</p>
            <div className='flex justify-between items-center   max-[430px]:flex-col w-[80%] h-[80%] '>
                <img data-aos="fade-down-right"  data-aos-duration="2000" className='w-[40%]  max-[430px]:w-[100%] h-[100%]' src={contact} alt="" />
                <div data-aos="fade-up-left"  data-aos-duration="2000" className='w-[45%] max-[430px]:w-[100%] h-[100%] '>
                    <form action="" className='flex flex-col pt-10 max-[430px]:pt-0 gap-8' ref={form} onSubmit={sendEmail}>
                        <input value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" placeholder='FullName' className=' bg-transparent placeholder:text-[#36a99a] rounded' name='name' />
                        <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type="email" required placeholder='Email' className=' bg-transparent placeholder:text-[#36a99a] rounded' name='email' />
                        <textarea value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder='Message ' className='h-[20vh] bg-transparent placeholder:text-[#36a99a] rounded' name='message'></textarea>
                        <input type="submit"  value="Send" className='bg-[#36a99a] w-[20%] max-[430px]:w-[30%] text-[#032a31]  font-bold px-8 py-2 rounded-full text-xl hover:bg-[#a9cfd0] '/>
                    </form>

                </div>
            </div>

        </section>
    );
};
