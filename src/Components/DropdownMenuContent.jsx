import { Link } from "react-router-dom";

const DropdownMenuContent = (props) => {
  const { dropdownShowing, setDropdownShowing } = props;
  const hideDropdown = () => {
    setDropdownShowing(false);
  };

  if (dropdownShowing) {
    return (
      <div className="DropdownMenuContent">
        <Link className="DropdownMenuContent__Link" to="/aboutme">
          <p onClick={hideDropdown} className="DropdownMenuContent__Item">
            About me
          </p>
        </Link>
        <Link className="DropdownMenuContent__Link" to="/mywork">
          <p onClick={hideDropdown} className="DropdownMenuContent__Item">
            My work
          </p>
        </Link>
        <Link className="DropdownMenuContent__Link" to="/contact">
          <p onClick={hideDropdown} className="DropdownMenuContent__Item">
            Contact
          </p>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};
export default DropdownMenuContent;
