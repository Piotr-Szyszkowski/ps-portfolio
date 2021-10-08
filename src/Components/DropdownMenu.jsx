import { useState } from "react";
import DropdownMenuContent from "./DropdownMenuContent";

const DropdownMenu = () => {
  const [dropdownShowing, setDropdownShowing] = useState(false);
  const toggleDropdownShowing = () => {
    setDropdownShowing(!dropdownShowing);
  };

  return (
    <div className="DropdownMenu">
      <img
        className="DropdownMenu__MenuIcon"
        onClick={toggleDropdownShowing}
        src={
          dropdownShowing ? "/Images/closed.png" : "/Images/Hamburger_icon.png"
        }
      />
      <DropdownMenuContent dropdownShowing={dropdownShowing} />
    </div>
  );
};
export default DropdownMenu;
