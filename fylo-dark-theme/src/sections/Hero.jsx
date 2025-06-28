const Hero = () => {
  return (
    <section className='fylo'>
      <div className='fylo__hero'></div>
      <div className='fylo__heading'>
        <h2 className='fylo__heading-primary'>
          All your files in one secure location,
          <span className='fylo__heading-primary--span'>
            accessible anywhere
          </span>
        </h2>
        <p className='fylo__heading-text'>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need,share and collabrate with friends
          family,and co-workers
        </p>
        <button className='fylo__heading-btn'>Get started</button>
      </div>
    </section>
  );
};

export default Hero;
