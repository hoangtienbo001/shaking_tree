import React from "react";
import { useNavigate } from 'react-router-dom';

function StartScreen() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/game', { replace: true });
    };
    return (
        <div>
            <p>
                Shake a** game !
            </p>
            <button onClick={handleClick}>Navigate to game</button>
        </div>
    )
}

export default StartScreen;