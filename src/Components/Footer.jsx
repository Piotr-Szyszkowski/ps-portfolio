const Footer = () => {
  return (
    <div className="Footer">
      {/*eslint-disable-next-line */}
      <a
        className="Footer__Link"
        href="https://www.linkedin.com/in/piotr-szyszkowski-7b1a78101/"
        target="_blank"
      >
        <img
          className="Footer__Image"
          src="/Images/linkedin_green.png"
          alt="Linkedin logo"
        />
      </a>
      {/*eslint-disable-next-line */}
      <a
        className="Footer__Link"
        href="https://github.com/Piotr-Szyszkowski"
        target="_blank"
      >
        <img
          className="Footer__Image"
          src="/Images/GitHub_Icon.png"
          alt="Github logo"
        />
      </a>
    </div>
  );
};

export default Footer;
