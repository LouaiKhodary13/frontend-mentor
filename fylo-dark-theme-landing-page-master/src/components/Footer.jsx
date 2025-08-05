import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    //  empty check
    if (!email.trim()) {
      setError(true);
      return;
    }
    //  email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    // If valid
    setError(false);
    console.log('Submitted:', email);
  };

  return (
    <footer className='footer'>
      <form className='footer__form' onSubmit={handleSubmit}>
        <h4 className='footer__form-heading'>Get early access today</h4>
        <p className='footer__form-text'>
          it only takes a minute to sign up and our free starter tier is
          extremely generous.if you have any questions. our support team would
          be happy to help you.
        </p>
        <div className='footer__form-btns'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            name='email'
            id='email'
            className='footer__form-btns-input'
            placeholder='email@example.com'
          />
          <button type='submit' className='footer__form-btns-submit'>
            get started for free
          </button>
        </div>
        {error && (
          <div className='error'>
            <p className='error__msg'>Please enter a valid email address</p>
          </div>
        )}
      </form>
      <div className='footer__logo-box'>
        <img
          src='/images/logo.svg'
          alt='logo'
          className='footer__logo-box-img'
        />
      </div>
      <div className='footer__grid'>
        <div className='footer__location'>
          <svg
            className='footer__location-icon'
            width='18'
            height='18'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z'
              fill='#FFF'
              fillRule='evenodd'
            />
          </svg>
          <p className='footer__location-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.sed do
            eiusmod tempor incididunt ut labore et dolore magna alique
          </p>
        </div>
        <div className='footer__contact'>
          <div className='footer__contact-phone'>
            <svg
              className='footer__contact-icon'
              width='18'
              height='18'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z'
                fill='#FFF'
                fillRule='evenodd'
              />
            </svg>
            <span className='footer__contact-text'>+1-543-123-4567</span>
          </div>
          <div className='footer__contact-phone'>
            <svg
              className='footer__contact-icon'
              width='20'
              height='16'
              xmlns='http://www.w3.org/2000/svg'>
              <g fill='none' fillRule='evenodd'>
                <path d='M-2-4h24v24H-2z' />
                <path
                  d='M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z'
                  fill='#FFF'
                />
              </g>
            </svg>
            <span className='footer__contact-text'>example@fylo.com</span>
          </div>
        </div>
        <ul className='footer__links'>
          <li>About us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className='footer__links'>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <div className='footer__cta'>
          <a href='' className='footer__cta-link'>
            <svg
              width='64px'
              height='64px'
              viewBox='0 0 192 192'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />

              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <g id='SVGRepo_iconCarrier'>
                <path
                  stroke='#9098a3'
                  strokeLinecap='round'
                  strokeWidth='12'
                  d='M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22'
                />
              </g>
            </svg>
          </a>
          <a href='' className='footer__cta-link'>
            <svg
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='64px'
              height='64px'
              viewBox='0 0 32 32'
              enableBackground='new 0 0 32 32'
              xmlSpace='preserve'
              fill='#9098a3'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />

              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <g id='SVGRepo_iconCarrier'>
                <g>
                  <path
                    fill='#9098a3'
                    d='M16-0.035C7.159-0.035-0.035,7.159-0.035,16S7.159,32.035,16,32.035S32.035,24.841,32.035,16 S24.841-0.035,16-0.035z M16,30.965C7.748,30.965,1.035,24.252,1.035,16S7.748,1.035,16,1.035S30.965,7.748,30.965,16 S24.252,30.965,16,30.965z'
                  />
                  <path
                    fill='#9098a3'
                    d='M24.797,11.082c-0.027,0.012-0.055,0.024-0.083,0.036c0.131-0.228,0.238-0.471,0.319-0.725 c0.063-0.198-0.002-0.414-0.165-0.543c-0.163-0.129-0.388-0.145-0.566-0.039c-0.522,0.31-1.083,0.538-1.673,0.681 c-0.693-0.632-1.608-0.99-2.553-0.99c-2.086,0-3.783,1.696-3.783,3.781c0,0.066,0.001,0.131,0.005,0.197 c-2.259-0.271-4.346-1.415-5.797-3.195c-0.104-0.127-0.262-0.201-0.427-0.183c-0.164,0.013-0.31,0.105-0.393,0.247 c-0.334,0.574-0.512,1.232-0.512,1.902c0,0.667,0.15,1.29,0.432,1.832c-0.147-0.03-0.295,0.025-0.412,0.116 C9.071,14.292,9,14.458,9,14.611c0,1.157,0.547,2.218,1.422,2.921c-0.007,0.007-0.014,0.014-0.021,0.022 c-0.117,0.132-0.155,0.316-0.102,0.484c0.356,1.11,1.194,1.968,2.242,2.373c-1.063,0.542-2.3,0.752-3.487,0.616 C8.83,21,8.605,21.137,8.526,21.356c-0.078,0.219,0.005,0.463,0.202,0.589c1.587,1.017,3.42,1.554,5.302,1.554 c6.159,0,9.839-5.002,9.839-9.839c0-0.06,0-0.12-0.001-0.18c0.601-0.466,1.12-1.025,1.547-1.664c0.124-0.185,0.11-0.429-0.033-0.6 C25.239,11.046,25.001,10.993,24.797,11.082z M23.068,12.829c-0.138,0.099-0.216,0.261-0.208,0.431 c0.006,0.133,0.009,0.267,0.009,0.4c0,4.345-3.306,8.839-8.839,8.839c-1.038,0-2.059-0.182-3.023-0.534 c1.145-0.198,2.218-0.674,3.152-1.406c0.167-0.13,0.233-0.352,0.166-0.552c-0.067-0.201-0.253-0.337-0.465-0.341 c-0.928-0.017-1.766-0.488-2.266-1.227c0.246-0.015,0.482-0.056,0.742-0.126c0.224-0.061,0.376-0.268,0.368-0.5 c-0.008-0.231-0.174-0.427-0.401-0.473c-1.079-0.217-1.94-1.047-2.212-2.076c0.045,0.016,0.086,0.03,0.125,0.044 c0.251,0.09,0.45,0.162,0.828,0.173c0.231,0.001,0.423-0.135,0.492-0.348s-0.013-0.444-0.198-0.568 c-0.741-0.495-1.166-1.339-1.166-2.316c0-0.247,0.033-0.491,0.096-0.726c1.729,1.795,4.088,2.879,6.588,3.005 c0.155,0.017,0.308-0.059,0.408-0.179c0.101-0.12,0.139-0.281,0.104-0.434c-0.048-0.207-0.072-0.42-0.072-0.635 c0-1.534,1.249-2.781,2.783-2.781c0.767,0,1.507,0.32,2.031,0.879c0.118,0.125,0.292,0.181,0.462,0.148 c0.221-0.044,0.439-0.098,0.654-0.162c-0.114,0.096-0.237,0.184-0.366,0.262c-0.203,0.121-0.292,0.367-0.216,0.59 c0.077,0.223,0.303,0.363,0.532,0.335c0.101-0.012,0.202-0.026,0.302-0.042C23.345,12.622,23.209,12.728,23.068,12.829z'
                  />
                </g>
              </g>
            </svg>
          </a>
          <a href='' className='footer__cta-link'>
            <svg
              width='64px'
              height='64px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0' />

              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              />

              <g id='SVGRepo_iconCarrier'>
                <path
                  d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
                  stroke='#9098a3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
                  stroke='#9098a3'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M17.6361 7H17.6477'
                  stroke='#9098a3'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
