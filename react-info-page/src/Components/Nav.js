import Image from '../Images/logo192.png';

const NavBar = () => {
  return (
    <div>
      <nav className="Topnav">
        <a href="#Home">
          <img className="Img" src={Image} alt="React" />
        </a>
        <a href="#Information">Information</a>
        <a href="#Contact">Contact</a>
        <a href="#About">About</a>
        <input type='text' placeholder="Search..." />
      </nav>
    </div>
  );
};

export default NavBar;
