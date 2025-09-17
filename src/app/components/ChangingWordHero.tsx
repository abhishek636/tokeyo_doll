"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

const ChangingWordHero = () => {
  const words = [
    "Streamer",
    "Friend",
    "Buddy",
    "Gamer",
    "Creator",
    "Companion",
    "Baddie",
    "Helper",
    "Assistant",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // fade in
      }, 300); // match fade duration
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
        <h1 className=" text-white text-center relative z-10">
          AI&nbsp;
          <span
            className={`text-white inline-block transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[index]}
          </span>
          &nbsp;Launchpad
        </h1>
    </>
  );
};

export default ChangingWordHero;
