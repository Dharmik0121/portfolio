import React, { useEffect, useState } from 'react';

function TypingText({ texts = ["Default Text"], speed = 100 }) {
    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        const currentText = texts[textIndex];
        if (charIndex < currentText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const delay = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, 2000); // delay before switching
            return () => clearTimeout(delay);
        }
    }, [charIndex, textIndex, texts, speed]);

    return (
        <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left text-indigo-900 dark:text-indigo-700">
            {displayedText}
            <span className="animate-pulse">|</span>
        </h2>
    );
}

export default TypingText;
