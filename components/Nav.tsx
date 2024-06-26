import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

export default function Nav() {
  return (
    <nav className="flex px-6 py-3 bg-zinc-950 border-b border-b-gray-400 items-center justify-between tracking-wide sticky top-0 z-10">
      <div>
        <p className="bold text-white font-serif sm:text-3xl text-xl cursor-pointer">
          <Link href="#top" className="scroll-smooth"> Bilal Hamza </Link>
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden gap-10 text-gray-300 font-serif text-lg cursor-pointer ">
        <div className="hover:text-white hover:ease-in hover:duration-300">
          <Link href="#top" className="scroll-smooth">Home</Link>
        </div>
        <div className="hover:text-white hover:ease-in hover:duration-300">
          <a href="#projects" className="scroll-smooth">Projects</a>
        </div>
        <div className="hover:text-white hover:ease-in hover:duration-300">
          <Link href="#about" className="scroll-smooth">About</Link>
        </div>
        <div className="hover:text-white hover:ease-in hover:duration-300">
          <Link href="#contact" className="scroll-smooth">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      

    </nav>
  )
};
