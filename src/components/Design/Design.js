import React from 'react';

import "./Design.css";
import DesignCard from "./DesignCard";

import BorderlessLogo from '../../assets/images/BorderlessIcon.webp';
import BorderlessFull from '../../assets/images/BorderlessFull.webp';
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
import FrosTz from '../../assets/images/AlexLogo.webp';

function Web() {

    return (
        <section id="design-work">
            <div className="design-project-row">
                <div>
                    <div className="design-info">
                        <h2>PHOTO MANIPULATION</h2>
                        <p>Hover over some of the images to see their before!</p>
                    </div>
                    <div className="design-project-row">
                    <DesignCard 
                        srcOne={NeonBikeAfter}
                        srcTwo={NeonBikeBefore}
                        title="@thekilacam"
                        description="Photo edit for instagram user @thekilacam"
                        />
                    <DesignCard 
                        srcOne={NightBikeAfter}
                        srcTwo={NightBikeBefore}
                        title="@moto.king.yyc"
                        description="Photo edit for instagram user @moto.king.yyc"
                        />
                    <DesignCard 
                        srcOne={NeonPortraitAfter}
                        srcTwo={NeonPortraitBefore}
                        title="@mr1ous_yyc"
                        description="Photo edit for instagram user @mr1ous_yyc"
                        />
                    </div>
                </div>
            <div>
                    <div className="design-info">
                        <h2>LOGOS</h2>
                    </div>
                    <div className="design-project-row">
                        <DesignCard 
                            srcOne={BorderlessLogo}
                            srcTwo={BorderlessFull}
                            title="Borderless"
                            description="Immigration podcast"
                            />
                        <DesignCard 
                            srcOne={FrosTz}
                            srcTwo={FrosTz}
                            title="FrosTz"
                            description="A logo I did for a Twitch streamer"
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
                            srcOne={Onslaught}
                            srcTwo={Onslaught}
                            title="Onslaught"
                            description="eSports logo"
                            />
                        <DesignCard 
                            srcOne={Leviathan}
                            srcTwo={Leviathan}
                            title="Leviathan"
                            description="eSports logo"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Web
