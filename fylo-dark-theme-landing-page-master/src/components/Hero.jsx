const Hero = () => {
  return (
    <section className='hero'>
      <img
        src='/images/illustration-intro.png'
        alt='fylo illustration-intro'
        className='hero__img'
      />
      <div className='hero__heading'>
        <h2 className='hero__heading--primary'>
          All your files in one secure location,
          <span className='hero__heading--primary-span'>
            accessible anywhere.
          </span>
        </h2>
        <p className='hero__heading--secondary'>
          Fylo stores all your most important files in one secure loation.
          Access them wherever you need, share and collaborate with friends
          family, and co-workres
        </p>
      </div>
      <button type='button' className='hero__btn'>
        Get started
      </button>
    </section>
  );
};

export default Hero;
