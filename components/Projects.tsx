import Link from "@/node_modules/next/link";

export default function Projects() {
    return (
        <div id="projects">
            <div className="flex items-center justify-center flex-col mt-11">
                <p className="text-white font-mono text-3xl sm:text-5xl mt-5">
                    My Projects
                </p>

                {/* Project Card 1 */}
                <div className="bg-zinc-500 w-4/6 sm:h-44 h-64 sm:mt-5 mt-2 rounded-lg flex sm:flex-row flex-col">
                    <div className="bg-[url('/public/wall5.jpg')] bg-cover bg-center w-full sm:w-2/5 sm:h-44 h-40 rounded-lg" />

                    <div className="sm:m-3 ml-2 mt-1 sm:w-8/12 w-11/12 ">
                        <Link href="https://project-promptopia-mhls0ak85-bilalhamza7s-projects.vercel.app" target="_blank" className="font-bold sm:text-xl text-lg font-serif underline">
                            Promptopia
                        </Link>

                        <p className="mt-1 sm:flex hidden md:text-sm text-xs font-lato text-zinc-900">
                            A full-stack application utilizing the latest features of Next.Js 14, to empower creative writers by providing a platform to create, share and view AI prompts. These prompts can then be copied and used with any AI tools.
                        </p>

                        <p className="mt-1 sm:hidden flex text-xs font-lato text-zinc-900">
                            A full-stack application utilizing the latest features of Next.Js 14, to empower creative writers by providing a platform to create, share and view AI prompts.
                        </p>

                        <Link href="https://project-promptopia-mhls0ak85-bilalhamza7s-projects.vercel.app" target="_blank" className="w-fit h-fit sm:text-xl text-base font-mono text-black flex gap-2 items-center hover:text-zinc-800 duration-300">
                            Visit <span className="text-4xl">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
