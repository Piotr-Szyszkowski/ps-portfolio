import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <p className="AboutMe__MainText">
        Hello friend! <br /> My name is Piotr [Peter] Szyszkowski. I am an
        easy-going chap of Polish origin who in early 2021 decided that life is
        way too short to merely settle for a job you don't mind. What we do
        should make us happy and fullfilled, and so I have embarked on a journey
        to become a full-fledged software developer. There are obviously many
        aspects that define us in who and what we are, and this space is too
        limited in its nature to cover them all, but let's try with most
        important, shall we? So who is this guy anyways?
      </p>
      <p className="AboutMe__Title">A CODER</p>
      <p className="AboutMe__SectionText">
        Coding makes me tick. Ever since I created my first crude game of
        battleships I knew writing code is what I love. My day is never complete
        without writing at least a couple of lines of code or solving a
        coding-related problem. My weapon of choice is mainly JavaScript, and I
        enjoy playing around with frameworks like React JS (or Native) and
        Vue.js. I am also a proud graduate of
        <a
          className="AboutMe__Northcoders"
          href="https://northcoders.com/"
          target="_blank"
        >
          Northcoders
        </a>
        full-stack coding bootcamp.
      </p>
    </div>
  );
};

export default AboutMe;
