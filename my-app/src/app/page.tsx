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
        className="rounded-full"
      />
      Hello!
    </>
  );
}
