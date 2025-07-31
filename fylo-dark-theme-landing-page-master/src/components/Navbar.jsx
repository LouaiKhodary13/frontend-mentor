const Navbar = () => {
  return (
    <nav className='fylo__navbar'>
      <div className='fylo__navbar-logo'>
        <img
          src='/images/logo.svg'
          alt='Logo'
          className='fylo__navbar-logo-img'
        />
      </div>
      <ul className='fylo__navbar-items'>
        <li className='fylo__navbar-item'>
          <a href='#' className='fylo__navbar-link'>
            Features
          </a>
        </li>
        <li className='fylo__navbar-item'>
          <a href='#' className='fylo__navbar-link'>
            Team
          </a>
        </li>
        <li className='fylo__navbar-item'>
          <a href='#' className='fylo__navbar-link'>
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
