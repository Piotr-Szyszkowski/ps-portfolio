import { useState } from "react";
import DropdownMenuContent from "./DropdownMenuContent";

const DropdownMenu = () => {
  const [dropdownShowing, setDropdownShowing] = useState(false);
  const dropDownOn = () => {
    setDropdownShowing(true);
  };
  const dropDownOff = () => {
    setDropdownShowing(false);
  };

  return (
    <div
      className="DropdownMenu"
      onMouseEnter={dropDownOn}
      onMouseLeave={dropDownOff}
    >
      <img
        className="DropdownMenu__MenuIcon"
        src={
          dropdownShowing ? "/Images/closed.png" : "/Images/Hamburger_icon.png"
        }
      />
      <DropdownMenuContent
        dropdownShowing={dropdownShowing}
        setDropdownShowing={setDropdownShowing}
      />
    </div>
  );
};
export default DropdownMenu;
