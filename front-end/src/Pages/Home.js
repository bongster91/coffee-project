import React from 'react';
import BrandLabel from "../images/BrandingLabel.png"

export default function Home() {

    const styles = {
        // MarginTop: "20px",
        fontFamily: "Braton Composer",
        color: "whitesmoke"
    }

    const imgStyle = {
        width: "100%",
        marginTop: "60px"
    }
    return (
            <div>
                <div>
                    <h1 style={styles}>JavaScript</h1>
                </div>


                <div>
                    <img style={imgStyle} src={BrandLabel} />
                </div>
            </div>
    )
}
