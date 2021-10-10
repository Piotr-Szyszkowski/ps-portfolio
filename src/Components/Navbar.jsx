import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <img className="Navbar__MainPic" src="/Images/PS-placeholder_v3.png" />
      </Link>
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
