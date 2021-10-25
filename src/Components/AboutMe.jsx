const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMe__Section">
        <p className="AboutMe__MainText">
          Hello friend! <br /> My name is Piotr [Peter] Szyszkowski. I am an
          easy-going chap of Polish origin who in early 2021 decided that life
          is way too short to merely settle for a job you don't mind. What we do
          should make us happy and fullfilled, and so I have embarked on a
          journey to become a full-fledged software developer. There are
          obviously many aspects that define us in who and what we are, and this
          space is too limited in its nature to cover them all, but let's try
          with most important, shall we? So who is this guy anyways?
        </p>
      </div>
      <div className="AboutMe__Section">
        <p className="AboutMe__Title">A CODER</p>
        <p className="AboutMe__SectionText">
          Coding makes me tick. Ever since I created my first crude game of
          battleships I knew writing code is what I love. My day is never
          complete without writing at least a couple of lines of code or solving
          a coding-related problem. My weapon of choice is mainly JavaScript,
          and I enjoy playing around with frameworks like React JS (or Native)
          and Vue.js. I am also a proud graduate of
          {/*eslint-disable-next-line */}
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
      <div className="AboutMe__Section">
        <p className="AboutMe__Title">A FATHER</p>
        <p className="AboutMe__SectionText">
          When I first held my son, Adam in my arms I knew right away life has
          changed forever. Looking at his face makes me realize how precious our
          time is, gives me the strength to keep going and makes me try to be
          the best version of myself every single day.
        </p>
      </div>
      <div className="AboutMe__Section">
        <p className="AboutMe__Title">A DREAMER</p>
        <p className="AboutMe__SectionText">
          Apart from loving all things fantasy, sci-fi and superhero I strongly
          believe that nothing is beyond our reach. Everything is achevable with
          a lot of faith and determination, hard work and a bit of luck.
          <br /> “Do, or do not. There is no try.” - Jedi Master Yoda
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
