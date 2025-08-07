import React from 'react';
import './CallSearching.css';

const CallSearching = () => {
  return (
    <div className="call-container">
      {/* Header */}
      <div className="header">
        <div className="logo">
          📞 <span>CallQuick</span>
        </div>
        <div className="encrypted-badge">
          🔒 End-to-End Encrypted
        </div>
      </div>

      {/* Warning */}
      <div className="warning">
        🚫 Do not share personal info with anyone
      </div>

      {/* Searching Box */}
      <div className="search-box">
        <div className="searching-text">Searching...</div>
        <button className="stop-button">STOP</button>
      </div>

      {/* Tip Section */}
      <div className="tip-box">
        <strong>CallQuick Super Tip!</strong>
        <p>The longer you talk on the calls, the higher your score and the more stars you earn!</p>
      </div>

      {/* Star Score */}
      <div className="score-box">
        <span>15 ⭐</span>
      </div>
    </div>
  );
};

export default CallSearching;
