import React, { useEffect, useState } from "react";

const IntroScreen = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);
    const [text, setText] = useState("");
    const fullText = "SAĞLAM OFİS MOBİLYA";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText((prev) => prev + fullText[index]);
            index++;
            if (index >= fullText.length) clearInterval(interval);
        }, 100); // Harf başına 100ms

        const timeout = setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish(); // İsteğe bağlı callback
        }, 3000); // 3 saniye sonra gizle

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{
                backgroundColor: "black",
                color: "yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                transition: "opacity 0.5s ease",
            }}
        >
            {text}
        </div>
    );
};

export default IntroScreen;
