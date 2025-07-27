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
      </div>
    </section>
  );
};

export default Hero;
