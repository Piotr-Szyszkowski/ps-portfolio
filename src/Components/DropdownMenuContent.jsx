import { Link } from "react-router-dom";

const DropdownMenuContent = (props) => {
  const { dropdownShowing, setDropdownShowing } = props;
  const hideDropdown = () => {
    setDropdownShowing(false);
  };
  if (dropdownShowing) {
    return (
      <div className="DropdownMenuContent">
        <Link to="/aboutme">
          <p onClick={hideDropdown} className="DropdownMenuContent__Item">
            About me
          </p>
        </Link>
        <Link to="/mywork">
          <p onClick={hideDropdown} className="DropdownMenuContent__Item">
            My work
          </p>
        </Link>
        <Link to="/contact">
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
