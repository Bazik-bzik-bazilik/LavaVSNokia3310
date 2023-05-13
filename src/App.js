import './App.css';
import {useState} from "react";
import NokiaModal from "./components/NokiaModal";

function App() {
    const [nokiaToLavaThrows, setNokiaToLavaThrows] = useState(0);

    return (
        <div className="App">
            <header>
                <h1>Lava VS Nokia 3310</h1>
            </header>
            <div>
                {nokiaToLavaThrows > 2 ?
                    <h2>Nokia победила!</h2> :
                    <div>
                        <img src={"images/lava.jpg"} alt={"Lava"}/>
                        <h2>VS</h2>
                    </div>
                }
                <img src={"images/nokia3310.jpg"} alt={"Nokia 3310"}/>
            </div>

            <h2>Сколько раз кинули нокию в лаву: {nokiaToLavaThrows}</h2>
            <NokiaModal imagePath={"images/nokia3310-2.jpg"} imageAlt={"Целая Nokia 3310"}
                        counter={nokiaToLavaThrows} setCounter={setNokiaToLavaThrows}/>
        </div>
    );
}

export default App;
