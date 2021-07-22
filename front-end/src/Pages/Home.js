import React from 'react';
import BrandLabel from "../images/BrandingLabel.png"

export default function Home() {

    const styles = {
        textAlign: "center",
        // MarginTop: "20px",
        fontFamily: "Braton Composer",
        color: "#ffd700"
    }

    const pStyles = {
        textAlign: "center",
        color: "whitesmoke"
    }

    const imgStyle = {
        width: "100%",
        marginTop: "60px"
    }
    return (
            <div>
                <div>
                    <p>Start and end your day with JavaScript</p>
                    <br />
                    <h1 style={styles}>JavaScript</h1>
                    <p style={pStyles}>Start and end your day with JavaScript</p>

                </div>


                <div>
                    <img style={imgStyle} src={BrandLabel} />
                </div>
            </div>
    )
}
