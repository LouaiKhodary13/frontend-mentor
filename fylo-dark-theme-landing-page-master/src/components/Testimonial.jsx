const Testimonial = () => {
  return (
    <section className='testimonial'>
      <article className='testimonial-card'>
        <blockquote className='testimonial-card__quote'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </blockquote>

        <div className='testimonial-card__profile'>
          <img src='/images/profile-1.jpg' alt='Satish Patel' />
          <div className='testimonial-card__info'>
            <h6 className='testimonial-card__name'>Satish Patel</h6>
            <p className='testimonial-card__role'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </article>
      <div className='testimonial-card'>
        <blockquote className='testimonial-card__quote'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </blockquote>
        <div className='testimonial-card__profile'>
          <img src='/images/profile-2.jpg' alt='Bruce McKenzie' />
          <div className='testimonial-card__info'>
            <h6 className='testimonial-card__name'>Bruce McKenzie</h6>
            <p className='testimonial-card__role'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className='testimonial-card'>
        <blockquote className='testimonial-card__quote'>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </blockquote>
        <div className='testimonial-card__profile'>
          <img src='/images/profile-3.jpg' alt='Iva Boyd' />
          <div className='testimonial-card__info'>
            <h6 className='testimonial-card__name'>Iva Boyd</h6>
            <p className='testimonial-card__role'>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
