const Home = () => {
  return (
    <div className="Home">
      <p className="Home__MainText">
        Hello! <br /> I am Piotr <br /> an aspiring web developer
      </p>

      <div className="Home__MyStack">
        <p className="Home__MyStack__Text">My tech stack:</p>
        <div className="Home__MyStack__Large">
          <img
            className="Home__MyStack__Large__Logo"
            src="/Images/JavaScript_logo.png"
            alt="JavaScript Logo"
          />
          <img
            className="Home__MyStack__Large__Logo"
            src="/Images/html_logo.png"
            alt="HTML 5 Logo"
          />
          <img
            className="Home__MyStack__Large__Logo"
            src="/Images/css_logo.png"
            alt="CSS Logo"
          />
        </div>
        <div className="Home__MyStack__Large">
          <img
            className="Home__MyStack__Medium__Logo"
            src="/Images/nodejs_logo.png"
            alt="Node js Logo"
          />
          <img
            className="Home__MyStack__Medium__Logo"
            src="/Images/react_js_logo.png"
            alt="React js Logo"
          />
          <img
            className="Home__MyStack__Medium__Logo"
            src="/Images/vuejs_logo.png"
            alt="Vue js Logo"
          />
          <img
            className="Home__MyStack__Medium__Logo"
            src="/Images/Postgresql_logo.png"
            alt="Postgress SQL Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
