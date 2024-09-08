"use client";

import Image from "next/image";
import profilepic from "../../public/profilepic.jpg";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
export default function Home() {
  const name = "Jared Delapasse";
  const index = useRef(0);
  const intervalId = useRef<any>(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText === "") {
      intervalId.current = setInterval(() => {
        if (index.current == name.length) return;
        flushSync(() => {
          setDisplayText((prevText) => {
            return (prevText += name[index.current]);
          });
        });
        index.current++;
      }, 100);
    }

    if (index.current == name.length) return clearInterval(intervalId.current);
  }, [displayText]);

  useEffect(() => {}, [displayText]);

  return (
    <>
      <div className="flex items-center">
        <Image
          src={profilepic}
          alt="Picture of me"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <h1 className="text-6xl ml-auto w-[576px]">
          {displayText}
          <span className="h-[50px] text-6xl animate-blink">|</span>
        </h1>
      </div>
      <div className="animate-slide-up">
        My name is Jared Delapasse. I'm a software engineer primarily focused on
        front-end. I've built this site to serve as a playground for the latest
        tech I'm interested in. I plan on keeping this up-to-date in
        semi-realtime with my current interests. Feel free to click around and
        see what I've been up to.
      </div>

      <div className="animate-slide-up delay-500 opacity-0">
        My name is Jared Delapasse. I'm a software engineer primarily focused on
        front-end. I've built this site to serve as a playground for the latest
        tech I'm interested in. I plan on keeping this up-to-date in
        semi-realtime with my current interests. Feel free to click around and
        see what I've been up to.
      </div>
    </>
  );
}
