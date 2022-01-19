import React, { useEffect } from "react";

const Drumpads = ({ name, id, audio }) => {
    const playSound = (file, name) => {
        var audio = new Audio(file);
        audio.volume = document.getElementById("volume").value;
        audio.play();
        // file.play();
        document.getElementById("display").textContent = name;
        document.getElementById("text").focus();
    };
    const focusText = () => document.getElementById("text").focus();
    const changeVolume = () => {
        document.getElementById("display").textContent = `Volume ${
            document.getElementById("volume").value * 100
        }`;
    };

    useEffect(() => {
        document
            .getElementById("volume")
            .addEventListener("change", changeVolume);
        document.getElementById("text").focus();
        document.addEventListener("click", focusText);
        return () => {
            document
                .getElementById("volume")
                .addEventListener("change", changeVolume);
            document.removeEventListener("click", focusText);
        };
    }, []);

    return (
        <>
            <div
                id={name}
                className="drum-pad"
                onClick={() => playSound(audio, name)}
            >
                <p>{id.toUpperCase()}</p>

                <audio className="clip" id={id} src={audio}></audio>
            </div>
        </>
    );
};

export default Drumpads;
