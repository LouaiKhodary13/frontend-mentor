const Navbar = () => {
  return (
    <nav className='fylo_nav'>
      <div className='fylo_nav_logo-box'>
        <img src='./images/logo.svg' alt='logo' />
      </div>
      <ul className='fylo_nav-items'>
        <li className='fylo_nav-item'>
          <a href='#' className='fylo_nav-item-link'>
            Features
          </a>
        </li>
        <li>
          <a href='#' className='fylo_nav-item-link'>
            Team
          </a>
        </li>
        <li>
          <a href='#' className='fylo_nav-item-link'>
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
