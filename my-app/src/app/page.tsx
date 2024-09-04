"use client";

import Image from "next/image";
import profilepic from "../../public/profilepic.jpg";
export default function Home() {
  return (
    <>
      <Image
        src={profilepic}
        alt="Picture of me"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <div>
        Hello, my name is Jared Delapasse. I'm a software engineer primarily
        focused on front-end. I've built this site to serve as a playground for
        the latest tech I'm interested in. I plan on keeping this up-to-date in
        semi-realtime with my current interests. Feel free to click around and
        see what I've been up to.
      </div>
    </>
  );
}
