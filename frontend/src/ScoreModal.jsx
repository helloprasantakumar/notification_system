import React from "react";

const ScoreModal = ({isVisible, scoreData, onClose}) => {
    if (!isVisible) return null;

    return (<div style={overlayStyle}>
        <div style={modalStyle}>
            <h1 style={{fontSize: "30px", color: "#007bff"}}>{scoreData.message}</h1>
            <h3 style={{fontSize: "24px", color: "#007bff"}}>User: {scoreData.user}</h3>
            <h3 style={{fontSize: "24px", color: "#e20a0a"}}>Message: {scoreData.msg}</h3>
            {/*<h3 style={{fontSize: "24px", color: "#007bff"}}>Score: {scoreData.score}</h3>*/}
            <button onClick={onClose} style={buttonStyle}>Close</button>
        </div>
    </div>);
};

// Styles
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
};

const modalStyle = {
    background: "#fff",
    padding: "20px 30px",
    borderRadius: "12px",
    minWidth: "300px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center"
};

const buttonStyle = {
    marginTop: "20px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
};

export default ScoreModal;
