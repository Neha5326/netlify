import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const openCVInNewTab = () => {
    window.open('/cv-page', '_blank'); // This should still be valid after moving the file.
  };
  
  return (
    <section className="pt-16"> {/* Add padding-top */}
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 text-center place-self-center sm:text-left'>
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Hello, I&apos;m{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Neha",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
          I am a full stack web developer with a passion for creating interactive and responsive web applications...
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
          </p>
          <div>
            <button  onClick={scrollToContact}
             className='w-full px-6 py-3 mr-4 text-white rounded-full hover:bg-slate-200 sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'>
              Hire Me
            </button>
            <button onClick={openCVInNewTab}
            className='w-full px-6 py-3 mt-3 text-white bg-transparent border border-white rounded-full hover:bg-slate-800 sm:w-fit'>
               View CV
            </button>
          </div>
        </div>
        <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[310px] h-[300px] lg:w-[380px] lg:h-[400px] sm:h-[300px] sm:w-[290px] relative'>
            <Image
              src='/images/hero-image.png'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='hero-image'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default HeroSection;
