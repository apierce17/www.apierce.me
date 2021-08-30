import React from 'react';
import { Link } from 'react-router-dom';


function WpAdmin() {
  return (
    <div className="wp-admin">
        <h1>No wordpress here, just react</h1>
        <h2>:)</h2>
        <p>It's ok, you can go back to the main site <Link to="/">here</Link></p>
        
    </div>
  );
}

export default WpAdmin;
