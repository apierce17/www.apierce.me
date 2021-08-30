import React from 'react';
import { Link } from 'react-router-dom';


function PrivacyPolicy() {
  return (
    <div id="pp">
        <div  className="pp">
        <h1>Privacy Policy</h1>
        <p>Like millions of other website owners, I use Google Analytics on apierce.me
        <br/>
        Google Analytics is a piece of software that grabs data about my visitors (you). It’s something like an advanced server log.</p>

        <h2>What does Google Analytics record?</h2>
        <ul>
            <li>What website you came from to get here.</li>
            <li>How long you stay for.</li>
            <li>What kind of computer you’re using.</li>
            <li>And quite a bit more.</li>
        </ul>

        <h2>What do I do with your data?</h2>
        <p>The tracking information allows me to better understand the kind of people who come to my site and what content they’re reading. This allows me to make better decisions about design and writing.
            Occasionally, I will compile aggregate statistics about the number of visitors this site receives and browsers being used. No personally identifying data is included in this type of reporting.
            All of my activity falls within the bounds of the Google Analytics Terms of Service.</p>

        <p>You can go back to the main site <Link to="/">here</Link></p>
        </div>
    </div>
  );
}

export default PrivacyPolicy;
