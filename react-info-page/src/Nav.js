import Image from './logo192.png';

const NavBar = () => {
  return (
    <div>
      <nav className='nav'>
        <img className="Img" src={Image} alt="React"></img>
        <ul className="NavItems">
          <li>Home</li>
          <li>Information</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
