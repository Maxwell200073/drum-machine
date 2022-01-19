import banks from "./data";
import Controls from "./Controls";
import Drumpads from "./Drumpads";

function App() {
    return (
        <>
            <header>
                <h1>Drum Machine</h1>
            </header>
            <div id="drum-machine" className="container">
                <input
                    type="text"
                    tabIndex={0}
                    id="text"
                    autocomplete="off"
                    onKeyPress={(e) => {
                        document
                            .getElementById(`${e.key}`)
                            .parentElement.click();
                    }}
                    autoFocus
                />
                <div className="pads">
                    {banks.map((pad) => {
                        return <Drumpads key={pad.id} {...pad} />;
                    })}
                </div>
                <Controls />
            </div>
        </>
    );
}

export default App;
