import Link from "@/node_modules/next/link";

export default function Home() {
    return (
        <div className="bg-[url('./public/wall5.jpg')] bg-cover bg-center w-full">
            <div className="flex justify-center items-center flex-col">
                <img src="/public/headshot.jpg" alt="headshot" className="sm:h-36 h-32 sm:w-36 w-32 rounded-full mt-8" />

                <p className="text-white font-mono text-3xl sm:text-5xl mt-5">I'm Bilal Hamza</p>

                <p className="text-gray-300 font-sans font-light md:text-xl text-base text-center mt-5 md:mx-40 px-2 py-2 mx-5 bg-zinc-950 rounded-lg bg-opacity-40 backdrop-blur-sm">A highly motivated full-stack engineer currently focusing on Next.js 14, I’m eager to begin my career and contribute to a team building innovative web applications. I'm passionate about constant learning and to collaborate with talented professionals to create exceptional user experiences.</p>
                
                <Link href="#projects" className="w-fit h-fit mt-6 sm:mb-10 mb-5 px-9 py-1 text-xl font-mono text-black bg-zinc-500 rounded-2xl hover:bg-zinc-700 duration-300 scroll-smooth">
                        My Projects
                </Link>
            </div>
        </div>
    )
};
