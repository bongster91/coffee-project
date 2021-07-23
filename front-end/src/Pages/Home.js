import React from 'react';
import BrandLabel from "../images/BrandingLabel.png";
import DevelopersCoffee from "../images/DevelopersCoffee.png";

export default function Home() {

    const imgStyle = {
        width: "100%",
        marginTop: "60px"
    }
    return (
            <div className="home-container">

                <div className="coffee-spotlight">
                     <img style={imgStyle} src={DevelopersCoffee} alt="coffee-banner-ad" />
                </div>

                <div>
                </div>


                <div>
                    <img style={imgStyle} src={BrandLabel} alt='brand-label' />
                </div>
            </div>
    )
}
