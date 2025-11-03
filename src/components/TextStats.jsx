import { useText } from "../context/TextContext";
import "../styles/TextStats.css";

const TextStats = () => {
    const { text } = useText();

    const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
    const charCount = text.length;

    return (
        <div className="text-stats">
            <p>Words: <span>{wordCount}</span></p>
            <p>Characters: <span>{charCount}</span></p>
        </div>
    );
};

export default TextStats;
