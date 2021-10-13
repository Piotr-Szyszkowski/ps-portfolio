import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img
          className="Navbar__MainPic"
          src="/Images/PS-batmfa-compres.png"
          alt="Piotr Szyszkowski Logo"
        />
      </Link>
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
