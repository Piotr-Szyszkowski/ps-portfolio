const MyWork = () => {
  return (
    <div className="MyWork">
      <p className="MyWork__Title">NC-GAMES [back-end]</p>
      <p className="MyWork__SectionText">
        A fully functional RESTful API. Built with Node.js, PostgreSQL and
        Express.js.
      </p>
      <a
        className="MyWork__Link"
        href="https://piotrs-games.herokuapp.com/api"
        target="_blank"
      >
        Deployed version
      </a>
      <a
        className="MyWork__Link"
        href="https://github.com/Piotr-Szyszkowski/be-nc-games-public"
        target="_blank"
      >
        Git Repository
      </a>
    </div>
  );
};

export default MyWork;
