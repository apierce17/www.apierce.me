import React from 'react';

import "./Design.css";
import DesignCard from "./DesignCard";

import upsidexdown from '../../assets/images/uxdLogo.webp';
import lifeoftheparty from '../../assets/images/lotp.webp';
import BSAuto from '../../assets/images/BSAuto.webp';
import NeonPortraitBefore from '../../assets/images/NeonPortraitBefore.webp';
import NeonPortraitAfter from '../../assets/images/NeonPortraitAfter.webp';
import NightBikeBefore from '../../assets/images/NightBikeBefore.webp';
import NightBikeAfter from '../../assets/images/NightBikeAfter.webp';
import NeonBikeBefore from '../../assets/images/NeonBikeBefore.webp';
import NeonBikeAfter from '../../assets/images/NeonBikeAfter.webp';
import Leviathan from '../../assets/images/Leviathan_Logo.webp';
import Onslaught from '../../assets/images/Onslaught.webp';
import AIS from '../../assets/images/AIS.webp';
import MHS from '../../assets/images/MHS.webp';
import STFU from '../../assets/images/STFU.webp';
import dakota from '../../assets/images/dakota-pierce.webp';

function Web() {

    return (
        <section id="design-work">
            <div className="design-info">
                <h1>Graphic Design</h1>
                <p>Graphic design projects I have done over time. <br/> <i>Hover over some of the images to see their before!</i></p>
            </div>
            <div className="design-project-row">
                <DesignCard 
                    srcOne={upsidexdown}
                    srcTwo={upsidexdown}
                    title="Upside x Down"
                    description="Personal project"
                    />
                <DesignCard 
                    srcOne={dakota}
                    srcTwo={dakota}
                    title="DP Logo"
                    description="A simple clean logo"
                    />
                    <DesignCard 
                    srcOne={BSAuto}
                    srcTwo={BSAuto}
                    title="BS Auto Detailing"
                    description="Auto detailing logo"
                    />
                <DesignCard 
                    srcOne={AIS}
                    srcTwo={AIS}
                    title="American Iris Society"
                    description="High School logo competetion (I won)"
                    />
                <DesignCard 
                    srcOne={MHS}
                    srcTwo={MHS}
                    title="Mining Health Solutions"
                    description="Freelance logo"
                    />
                <DesignCard 
                    srcOne={STFU}
                    srcTwo={STFU}
                    title="STFU Threads"
                    description="Logo done for weightlifting brand"
                    />
                <DesignCard 
                    srcOne={lifeoftheparty}
                    srcTwo={lifeoftheparty}
                    title="Life of the Party"
                    description="Album art"
                    />
                <DesignCard 
                    srcOne={NeonPortraitAfter}
                    srcTwo={NeonPortraitBefore}
                    title="@mr1ous_yyc"
                    description="Photo edit for instagram user @mr1ous_yyc"
                    />
                <DesignCard 
                    srcOne={NightBikeAfter}
                    srcTwo={NightBikeBefore}
                    title="@moto.king.yyc"
                    description="Photo edit for instagram user @moto.king.yyc"
                    />
                <DesignCard 
                    srcOne={NeonBikeAfter}
                    srcTwo={NeonBikeBefore}
                    title="@thekilacam"
                    description="Photo edit for instagram user @thekilacam"
                    />
                <DesignCard 
                    srcOne={Leviathan}
                    srcTwo={Leviathan}
                    title="Leviathan"
                    description="eSports logo"
                    />
                <DesignCard 
                    srcOne={Onslaught}
                    srcTwo={Onslaught}
                    title="Onslaught"
                    description="eSports logo"
                    />
            </div>
        </section>
    )
}

export default Web
