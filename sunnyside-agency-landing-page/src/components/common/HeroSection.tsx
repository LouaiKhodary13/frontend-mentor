import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='bg-hero-pattern-mob md:bg-hero-pattern bg-cover bg-center'>
      <div className=' h-[100vh]  w-full relative flex justify-center items-center'>
        <div className='w-full flex flex-col items-center justify-start gap-10 relative'>
          <h2 className='text-4xl mt-36 md:mt-0 md:text-5xl tracking-widest text-white text-center mb-16'>
            WE ARE CREATIVES
          </h2>
          <Image
            className='mb-24 md:mb-28'
            src='/assets/icon-arrow-down.svg'
            width={30}
            height={30}
            alt='arrow down'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
