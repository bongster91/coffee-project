import AboutLabel from "../images/Pursuit Roasting Company.png"

function About() {

    const imgStyle = {
        width: "100%",
        marginTop: "30px",
        backgroundSize: "contain"
    }

    return (
        <div className="about-container">

            <div className="about-introBanner">
                <img style={imgStyle} src={AboutLabel} alt='About-label' />
            </div>

            <main className="about-blurb">
                <h5>About Us</h5>
                <p>JavaScript Coffee is a company founded on sleepless nights and caffeine breaks by four software engineers.
                    <br />
                    Our Mission is to sustain our " All code no sleep " lifestyle.
                    <br />
                  We were so commited and so passionate that we developed our own coffee line under the Pursuit Roasting Company.
                  <br />
                  Our coffee is organic, and environmentally friendly so that you can stay caffeinated with a guilt free conscience.
                </p>
            </main>


        </div>
    );
};

export default About;
