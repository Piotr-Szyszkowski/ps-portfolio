const MyWork = () => {
  return (
    <div className="MyWork">
      <div className="MyWork__Section">
        <p className="MyWork__Title">NC-GAMES [back-end]</p>
        <a
          className="MyWork__Section__ImageLink"
          href="https://piotrs-games.herokuapp.com/api"
          target="_blank"
        >
          <img
            className="MyWork__Section__Image"
            src="/Images/be_ncgames_01.JPG"
          />
        </a>
        <p className="MyWork__SectionText">
          A fully functional RESTful API for games lovers. Built with Node.js,
          PostgreSQL and Express.js.
        </p>
        {/*eslint-disable-next-line */}
        <a
          className="MyWork__Link"
          href="https://piotrs-games.herokuapp.com/api"
          target="_blank"
        >
          -- Deployed version --
        </a>
        {/*eslint-disable-next-line */}
        <a
          className="MyWork__Link"
          href="https://github.com/Piotr-Szyszkowski/be-nc-games-public"
          target="_blank"
        >
          -- Git Repository --
        </a>
      </div>
      <div className="MyWork__Section">
        <p className="MyWork__Title">NC-GAMES [front-end]</p>
        <a
          className="MyWork__Section__ImageLink"
          href="https://piotr-nc-games.netlify.app/"
          target="_blank"
        >
          <img
            className="MyWork__Section__Image"
            src="/Images/fe_ncgames_01.JPG"
          />
        </a>
        <p className="MyWork__SectionText">
          A an Single Page Aplicatopn user interface for NC-Games. Comment and
          vote on your favourite reviews! Delivered with React, Axios and
          Tailwind CSS.
        </p>
        {/*eslint-disable-next-line */}
        <a
          className="MyWork__Link"
          href="https://piotr-nc-games.netlify.app/"
          target="_blank"
        >
          -- Deployed version --
        </a>
        {/*eslint-disable-next-line */}
        <a
          className="MyWork__Link"
          href="https://github.com/Piotr-Szyszkowski/nc-games"
          target="_blank"
        >
          -- Git Repository --
        </a>
      </div>
      <div className="MyWork__Section">
        <p className="MyWork__Title">CLEANR [mobile app]</p>
        <div className="MyWork__Section__SmallImagesContainer">
          <a
            className="MyWork__Section__SmallImage-Link"
            href="https://github.com/Piotr-Szyszkowski/cleaner-project"
            target="_blank"
          >
            <img
              className="MyWork__Section__SmallImage"
              src="/Images/cleanr01.png"
            />
          </a>
          <a
            className="MyWork__Section__SmallImage-Link"
            href="https://github.com/Piotr-Szyszkowski/cleaner-project"
            target="_blank"
          >
            <img
              className="MyWork__Section__SmallImage"
              src="/Images/cleanr02.png"
            />
          </a>
          <a
            className="MyWork__Section__SmallImage-Link"
            href="https://github.com/Piotr-Szyszkowski/cleaner-project"
            target="_blank"
          >
            <img
              className="MyWork__Section__SmallImage"
              src="/Images/cleanr03.png"
            />
          </a>
        </div>
        <p className="MyWork__SectionText">
          An app for window cleaners and their clients. Developed with FIrebase,
          React Native and Node.js for Android and iOS. [Currently not deployed]
        </p>

        {/*eslint-disable-next-line */}
        <a
          className="MyWork__Link"
          href="https://github.com/Piotr-Szyszkowski/cleaner-project"
          target="_blank"
        >
          -- Git Repository --
        </a>
      </div>
    </div>
  );
};

export default MyWork;
