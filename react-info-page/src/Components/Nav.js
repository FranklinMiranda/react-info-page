import Image from '../Images/logo192.png';

const NavBar = () => {
  return (
    <div>
      <nav className='nav'>
        <img className="Img" src={Image} alt="React"></img>
        <ul>
          <li>Home</li>
          <li>Information</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
