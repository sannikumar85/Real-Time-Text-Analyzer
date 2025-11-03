import { useText } from "../context/TextContext";
import "../styles/TextArea.css";

const TextArea = () => {
    const { text, setText } = useText();

    return (
        <textarea 
            className="text-area" 
            placeholder="Type or paste your text here..."
            value={text} 
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default TextArea;
