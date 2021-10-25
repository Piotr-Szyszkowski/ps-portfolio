import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="DropdownMenuContent__Link-L NavGrid__Invisible"></div>
      <Link
        className="DropdownMenuContent__Link-L NavGrid__AboutMe"
        to="/aboutme"
      >
        <p className="DropdownMenuContent__Item-L">About me</p>
      </Link>
      <Link className="NavGrid__Home" to="/">
        <img
          className="Navbar__MainPic"
          src="/Images/PS-batmfa-compres.png"
          alt="Piotr Szyszkowski Logo"
        />
      </Link>
      <Link
        className="DropdownMenuContent__Link-L NavGrid__MyWork"
        to="/mywork"
      >
        <p className="DropdownMenuContent__Item-L">My work</p>
      </Link>
      <div className="DropdownMenuContent__Link-L NavGrid__Invisible"></div>
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
