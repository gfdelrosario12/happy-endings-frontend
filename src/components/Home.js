import "../App.css";
import ceo from "./assets/team/CEO.jpg";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <div className="body-content">
        <div className="body-container">
          <section id="Instruction" class="Instruction">
            <p className="section-title">How To Use</p>
            <p>
              To use our services at Happy Endings, either{" "}
              <a href="#">Log In</a> or <a href="#">Sign Up</a> to proceed to a
              new interface.
            </p>
          </section>
          <section id="about" class="about">
            <p className="section-title">About</p>
            <p>
              Welcome to Happy Endings, your one-stop destination for all your
              wedding information essentials. Say goodbye to the hassle of
              traditional paper invitations and hello to the convenience of
              electronic wedding invitations crafted with love and attention to
              detail. Join us in making your special day truly memorable,
              starting with the perfect invitation.
            </p>
          </section>
          <section id="mission" class="mission">
            <p className="section-title">Mission</p>
            <p>At Happy Endings, our mission is to:</p>
            <ul>
              <li>Simplify and enhance the wedding planning process</li>
              <li>Provide convenient access to essential information</li>
              <li>Offer beautifully crafted electronic invitations</li>
              <li>Alleviate the stress associated with wedding preparations</li>
              <li>
                Create memorable experiences celebrating love and commitment
              </li>
            </ul>
          </section>
          <section id="vission" class="vission">
            <p className="section-title">Vission</p>
            <p>
              Our vision at Happy Endings is to become the go-to platform for
              couples embarking on their wedding journey, offering a seamless
              blend of innovation, creativity, and personalized service. We
              envision a future where every couple can effortlessly create and
              share their love story through our user-friendly platform, leaving
              a lasting impression on their guests and cherishing the joy of
              their special day.
            </p>
          </section>
          <section id="team" class="team">
            <p className="section-title">Team</p>
            <div className="row-container">
              <div className="column-container">
                <div>
                  <img src={ceo} className="ceo" />
                </div>
                <div>
                  <p className="ceo-title">
                    Gladwin Del Rosario - CEO and Lead Developer
                  </p>
                  <figcaption>
                    As the CEO and Lead Developer of Happy Endings, Gladwin Del
                    Rosario embodies a unique blend of visionary leadership and
                    technical prowess, single-handedly driving the company's
                    success. With a passion for technology and weddings, he
                    tirelessly innovates to simplify the wedding planning
                    process and deliver exceptional electronic invitations.
                    John's hands-on approach, attention to detail, and
                    unwavering commitment to excellence ensure that Happy
                    Endings remains a trusted ally for couples, offering
                    memorable experiences and easing the stress of their special
                    day.
                  </figcaption>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
