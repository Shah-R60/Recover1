import React from 'react';
import './CallActive.css';

const CallActive = () => {
  return (
    <div className="call-active-container">
      {/* Top Menu */}
      <div className="top-menu">
        <button className="menu-btn">🎯</button>
        <button className="menu-btn">➕</button>
        <button className="menu-btn">📖</button>
        <button className="menu-btn">👤 logged-in</button>
        <button className="menu-btn">📢 Report</button>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="green-btn">Things To Ask</button>
        <div className="call-icon">📞⚡</div>
        <button className="red-btn">AI Translate</button>
      </div>

      {/* Call Area */}
      <div className="call-screen">
        <p className="timer">00:02</p>
        <p className="caller-name">Caller RP Redacted</p>

        {/* Star rating steps */}
        <div className="star-steps">
          <span className="step active">1</span> — 
          <span className="step">2</span> — 
          <span className="step">3</span> — 
          <span className="step">4</span>
        </div>

        {/* Star Ratings */}
        <div className="star-ratings">
          ⭐ 1 ⭐ 2 ⭐ 3 ⭐ 4
        </div>
      </div>

      {/* Bottom Status */}
      <div className="connected-status">
        📞 Connected
      </div>

      <div className="warning-box">
        ℹ️ Stay safe! Don’t share numbers or social IDs with anyone.
      </div>
    </div>
  );
};

export default CallActive;
