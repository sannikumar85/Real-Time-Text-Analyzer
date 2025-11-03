// 

import { TextProvider } from "./context/TextContext";
import TextArea from "./components/TextArea";
import TextStats from "./components/TextStats";
import "./styles/App.css";

function App() {
    return (
        <TextProvider>
            <div className="app-container">
                <h1>Real-Time Text Analyzer</h1>
                <TextArea />
                <TextStats />
            </div>
        </TextProvider>
    );
}

export default App;
