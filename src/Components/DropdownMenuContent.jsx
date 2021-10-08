const DropdownMenuContent = (props) => {
  const { dropdownShowing } = props;
  if (dropdownShowing) {
    return (
      <div>
        <p>About me</p>
        <p>My work</p>
        <p>Contact</p>
      </div>
    );
  } else {
    return null;
  }
};
export default DropdownMenuContent;
