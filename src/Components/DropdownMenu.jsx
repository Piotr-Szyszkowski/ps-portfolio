import { useState } from "react";

const DropdownMenu = () => {
  const [dropdownShowing, setDropdownShowing] = useState(false);
  const toggleDropdownShowing = () => {
    setDropdownShowing(!dropdownShowing);
  };

  return (
    <img
      className="DropdownMenu__MenuIcon"
      onClick={toggleDropdownShowing}
      src={
        dropdownShowing ? "/Images/closed.png" : "/Images/Hamburger_icon.png"
      }
    />
  );
};
export default DropdownMenu;

//   {dropdownShowing ? <p>Some</p> : <p>Some other</p>}

// dropdownShowing
//             ? "/Images/closedHamburger.svg"
//             : "/Images/Hamburger_icon.svg"
