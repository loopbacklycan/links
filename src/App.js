import React, { useState } from 'react';
import './styles.css'; // Import the custom CSS file

const App = () => {
  // State to track whether the Bitcoin address is visible
  const [showBitcoinAddress, setShowBitcoinAddress] = useState(false);

  // Bitcoin address
  const bitcoinAddress = "bc1qy3q2hdsvafjxr7ep9rmc9j96564ufyx436dxs64kk0fyyrguupvsh0mjc0"; // Replace with your actual Bitcoin address

  const handleBTCClick = () => {
    // Toggle the visibility of the Bitcoin address
    setShowBitcoinAddress(!showBitcoinAddress);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title press-start-2p-regular">loopback_lycan</h1>
      </header>

      {/* Profile Picture */}
      <img src="/profile.jpg" alt="Profile Picture" className="profile-img" />

      {/* Link Tree */}
      <div className="link-tree">
        <a href="https://youtube.com/@loopbacklycan" target="_blank" rel="noopener noreferrer" className="link-item">
          YouTube
        </a>
        <a href="https://github.com/loopbacklycan" target="_blank" rel="noopener noreferrer" className="link-item">
          GitHub
        </a>
        <a href="https://loopback-lycan.gitbook.io" target="_blank" rel="noopener noreferrer" className="link-item">
          GitBook
        </a>
        <a href="https://discord.com/invite/6tSbqvn7K6" target="_blank" rel="noopener noreferrer" className="link-item">
          Discord
        </a>
        <a href="https://keybase.io/loopback_lycan" target="_blank" rel="noopener noreferrer" className="link-item">
          Keybase
        </a>
        <a href="https://www.patreon.com/loopback_lycan" target="_blank" rel="noopener noreferrer" className="link-item">
          Patreon
        </a>

        {/* Bitcoin Link */}
        <div className="link-item" onClick={handleBTCClick}>
          BTC
        </div>
      </div>

      {/* Display Bitcoin Address */}
      {showBitcoinAddress && (
        <div className="bitcoin-address-display">
          <p className="bitcoin-address">{bitcoinAddress}</p>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        
        <p className="rights-reserved">
          &copy; {new Date().getFullYear()} loopback_lycan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
