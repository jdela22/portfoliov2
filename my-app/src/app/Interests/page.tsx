import Image from "next/image";
import NeovimScreenshot from "../../../public/NeovimScreenshot.png";
const Interests = () => {
  return (
    <>
      <h1>Coding</h1>
      <h3>Neovim</h3>
      <Image src={NeovimScreenshot} alt="NeovimScreenshot" className="mb-4" />
      <div className="mb-4">
        <a
          href="https://neovim.io/"
          className="text-sky-600 underline"
          target="_blank"
        >
          Neovim
        </a>{" "}
        is a hyper-extensible, vim-based text editor. It's an incredibly
        lightweight, highly configurable editor that allows user to create a
        development experience that is truly tailored to themself.
      </div>
      <div className="mb-4">
        Neovim's strength comes from an expansive and thriving community of
        developers creating open-sourced plugins to extend the functionality of
        Neovim in incredible ways. Out of the box, Neovim comes with the basics
        and is hardly distinguishable from vim. However, the possibilities are
        endless once you understand the ways in which the lua programming
        language can be used to install community-made plugins, as well as
        create custom Neovim functionality of your own, it becomes an incredibly
        powerful IDE.
      </div>
      <div className="mb-4">
        This project was made using Neovim as the editor. I've installed many
        plugins and keep my dotfiles on my{" "}
        <a
          href="https://github.com/jdela22/dotfiles"
          target="_blank"
          className="text-sky-600 underline"
        >
          github
        </a>{" "}
        if you want to check out my personal config. Neovim has really made
        coding something I enjoy and look forward to. I look forward to
        exploring more and using Neovim as my main editor.
      </div>
      <li>Interpreter in Go</li>

      <h2>UI</h2>
      <ul>
        <li>Shadcn UI</li>
        <li>Lucide Icons</li>
        <li>v0</li>
      </ul>
      <h3>
        Other
        <ul>
          <li>Fantasy Football</li>
        </ul>
      </h3>
      <div>This is interests</div>
    </>
  );
};

export default Interests;
