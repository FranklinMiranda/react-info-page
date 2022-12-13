import Image from '../Images/logo192.png';

// A simple functional Component that renders out a Navigation Bar 
const NavBar = () => {
  return (
    <div className="Nav">
      <nav>
        <a href="#Home">
          <img className="Img" src={Image} alt="React" />
        </a>
        <a href="#Information">Information</a>
        <a href="#Contact">Contact</a>
        <a href="#About">About</a>
      </nav>
    </div>
  );
};

export default NavBar;
