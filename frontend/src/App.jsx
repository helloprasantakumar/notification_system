import React, { useEffect, useState } from "react";
import socket from "./socket";
import ScoreModal from "./ScoreModal.jsx";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [scoreData, setScoreData] = useState({});

    useEffect(() => {
        socket.on("scoreUpdate", (data) => {
            console.log("Received score update:", data);
            setScoreData(data);
            setShowModal(true);
        });


      /*  setTimeout(() => {
            setShowModal(false);
        }, 5000);*/

        return () => socket.off("scoreUpdate");
    }, []);

    return (
        <div>
            <h1>Live Score Viewer</h1>
            <p>Send a score via Postman to see it pop up.</p>
            <ScoreModal
                isVisible={showModal}
                scoreData={scoreData}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default App;
