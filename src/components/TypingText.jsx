/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);
                if (index === text.length) {
                    setIsDeleting(true);
                }
            } else {
                setDisplayedText(text.slice(0, index - 1));
                setIndex(index - 1);
                if (index === 0) {
                    setIsDeleting(false);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed]);

    return (
        <h1 className="text-3xl font-bold text-indigo-700">{displayedText}|</h1>
    );
};

export default TypingText;
