import Link from "@/node_modules/next/link";

export default function About() {
    return (
        <div id="about">
            <div className="flex items-center justify-center flex-col mt-16">
                <p className="text-white font-mono text-3xl sm:text-5xl">
                    About Me
                </p>

                <div className="bg-zinc-950 px-2 sm:pt-0 py-3 sm:my-7 my-2 mx-7 sm:text-left text-center rounded-2xl bg-opacity-65 flex sm:flex-row flex-col items-center">
                    <div className="bg-[url('./public/headshot.jpg')] bg-cover bg-center w-2/6 sm:w-full sm:h-80 h-40 rounded-lg" />

                    <div>
                        <p className="text-white font-lato text-xs sm:text-lg sm:mx-10 mt-5 tracking-wide">
                            Fresh out of the National Institute of Business Management (NIBM) with a
                            <span className="text-zinc-400"> Higher National Diploma</span>, I'm a
                            <span className="text-zinc-400"> full-stack engineer</span> fueled by a passion for crafting
                            exceptional web experiences. While my projects during my studies exposed me
                            to
                            <span className="text-zinc-400"> various development tools</span>, I've recently discovered the power of
                            <span className="text-zinc-400"> Next.js</span> and
                            I'm diving head first into this exciting framework.
                        </p>

                        <p className="text-white font-lato text-xs sm:text-lg sm:mx-10 mt-5 tracking-wide">

                            Beyond coding, I'm a huge <span className="text-red-700">football fan (GGMU!)</span>, I carry an <span className="text-yellow-600">80+ WPM</span> in touch
                            typing, and when I'm not glued to the screen, you might find me <span className="text-blue-500">gaming!</span>
                        </p>

                        <p className="text-white font-lato text-xs sm:text-lg sm:mx-10 my-5 tracking-wide">
                            This blend of technical skills and drive to learn makes me eager to contribute to a
                            collaborative team and bring your web projects to life with the power of Next.js.
                        </p>

                        <Link href="#contact" className="w-fit h-fit px-9 py-1 sm:ml-10 text-xl font-mono text-black bg-zinc-500 rounded-2xl hover:bg-zinc-700 duration-300 scroll-smooth">
                            Lets Connect!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
