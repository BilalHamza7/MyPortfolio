'use client'

import Link from "@/node_modules/next/link";
import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api', 
            { // Update to your API route path
                method: 'POST',
                body: JSON.stringify({ 
                    name: name,
                    email: email,
                    message: message
                })
            });

            const data = await response.json(); // Parse response data

            if (response.ok) {
                alert("Message Sent successfully!");
            } else {
                alert("Failed to send Message: " + data.message); // Include error details
            }
        } catch (error) {
            alert("Failed to send Message!"); // Handle network errors
        }
    }

    return (
        <div id="contact">
            <div className="flex items-center justify-center flex-col mt-5">
                <p className="text-white font-mono text-sm sm:text-2xl">
                    Let's talk, I would love to hear from you!
                </p>
                <p className="text-white text-xs sm:text-sm m-3 text-center tracking-wider">
                    Please leave a message below and I will get back to you as soon as possible.
                </p>

                {/* Desktop */}
                <div className="hidden sm:flex flex-row justify-between w-full my-5">
                    <form onSubmit={handleSubmit} method="post" className="flex flex-col items-start w-full">
                        <label className="text-white text-xl ml-32 font-serif">Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Ex: John Smith" className="text-dm w-64 ml-32 px-3 py-1 font-lato text-neutral-900 bg-zinc-500 font-medium rounded outline-none focus:ring-1 focus:ring-white placeholder-stone-700" />

                        <label className="text-white text-xl ml-32 font-serif mt-5">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Example@gmail.com" className="text-dm w-64 ml-32 px-3 py-1 font-lato text-neutral-900 bg-zinc-500 focus:ring-1 focus:ring-white font-medium rounded outline-none placeholder-stone-700" />

                        <label className="text-white text-xl ml-32 font-serif mt-5">Message:</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Enter your message" rows={4} className="text-dm w-64 ml-32 px-3 py-1 font-lato text-neutral-900 bg-zinc-500 focus:ring-1 focus:ring-white font-medium rounded outline-none resize-none placeholder-stone-700" />

                        <button type="submit" className="w-64 h-fit mt-5 ml-32 py-1 text-xl font-mono text-neutral-900 bg-zinc-500 rounded-xl hover:bg-zinc-700 duration-300 scroll-smooth">
                            Submit
                        </button>
                    </form>

                    <div className="bg-[url('/wall5.jpg')] bg-cover bg-center w-2/6 sm:w-full sm:h-80 h-40 rounded-lg mx-16 p-5 flex flex-row justify-between mt-3">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-row items-center gap-3">
                                <img src="/name.png" alt="name" className="w-10 h-10" />
                                <label className="text-lg text-neutral-300">Bilal Hamza</label>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <img src="/phone.png" alt="phone" className="w-10 h-10" />
                                <label className="text-lg text-neutral-300">+94 77 388 8721</label>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <img src="/linkedin.png" alt="linkedin" className="w-10 h-10" />
                                <Link href="https://linkedin.com/in/bilalhamza7/" target="_blank" className="text-lg text-neutral-300 hover:underline">linkedin Profile</Link>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <img src="/github.png" alt="github" className="w-10 h-10" />
                                <Link href="https://github.com/BilalHamza7" target="_blank" className="text-lg text-neutral-300 hover:underline">github Profile</Link>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <img src="/typing.png" alt="typing" className="w-10 h-10" />
                                <Link href="https://monkeytype.com/profile/bilalHamza" target="_blank" className="text-lg text-neutral-300 hover:underline">Touch Typing</Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 ">
                            <div className="flex flex-row items-center gap-3">
                                <img src="/address.png" alt="name" className="w-10 h-10" />
                                <Link href="https://maps.app.goo.gl/YBEBVpf2ASvNfynJ7" target="_blank" className="text-base text-neutral-300 hover:underline">Chinafort, Beruwala, Sri Lanka</Link>
                            </div>

                            <div className="flex flex-row items-center gap-3">
                                <img src="/email.png" alt="phone" className="w-10 h-10" />
                                <label className="text-base text-neutral-300">bilalhamzazuhry@gmail.com</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div>

                </div>
            </div>
        </div>
    )
};
