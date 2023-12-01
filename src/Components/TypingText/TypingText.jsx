import React, { useState, useEffect } from "react";

export const TypingText = () => {
  const greetings = ["Hello!", "Hola!", "Bonjour!", "안녕", "こんにちは", "สวัสดีครับ"]
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      if (charIndex < greetings[currentGreetingIndex].length) {
        setDisplayText((prevText) => prevText + greetings[currentGreetingIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Jika sudah mengetik sapaan selesai, reset ke awal.
        setDisplayText("");
        setCharIndex(0);

        // Pilih sapaan berikutnya secara acak.
        const nextGreetingIndex = Math.floor(Math.random() * greetings.length);
        setCurrentGreetingIndex(nextGreetingIndex);
      }
    }, 250); // Kecepatan pengetikan per karakter (sesuaikan sesuai keinginan).

    return () => {
      clearInterval(typingTimer);
    };
  }, [charIndex, currentGreetingIndex, greetings]);

  return <div className="text-[56px] flex flex-col text-center">{displayText}</div>;
};
