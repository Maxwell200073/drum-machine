import React from "react";

const Controls = () => {
    return (
        <div className="controlPanel">
            <div className="inner-container">
                <p id="display"></p>
            </div>
            <input type="range" id="volume" min={0} max={1} step={0.01} />
        </div>
    );
};

export default Controls;
