import React from 'react';
import BrandLabel from "../images/BrandingLabel.png";
import DevelopersCoffee from "../images/DevelopersCoffee.png";

export default function Home() {

    const styles = {
        textAlign: "center",
        // MarginTop: "20px",
        fontFamily: "Braton Composer",
        color: "#ffd700"
    }

    const pStyles = {
        margin: "5em",
        textAlign: "center",
        color: "whitesmoke"
    }

    const imgStyle = {
        width: "100%",
        marginTop: "60px"
    }
    return (
            <div className="home-container">

                <div className="coffee-spotlight">
                    <img style={imgStyle} src={DevelopersCoffee} />
                </div>

                <div>


                </div>


                <div>
                    <img style={imgStyle} src={BrandLabel} alt='brand-label' />
                </div>
            </div>
    )
}
