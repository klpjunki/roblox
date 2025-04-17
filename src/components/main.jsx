import FeaturesSection from "./secs.jsx";

function Main() {


    const text1 = "Supported low-end PCs and let you enjoy the stable and smooth. Unleashes your graphics performance with exclusive graphics technology, supports high frame rate and 4K-quality graphics.\n" +
        "Take control in the game with ease."
    const text2 = "A premium experience embedded with the latest technologies to enhance your scripting experience to the next level."

    return (
        <main className={"min-h-screen"}>
            <section>
                <div className={"flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-500/5 via-blue-600/5 to-transparent px-4"}>
                    <div className={"flex flex-col items-center justify-center px-4"}>
                        <p className={"text-gradient mb-4 text-xs font-semibold uppercase sm:text-sm"}>The sky is the limit</p>
                        <span className={"flex flex-col items-center text-center"}>
                            <h1 className="flex flex-col items-center text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">Revolutionizing the<span
                                className="mt-2 flex flex-row items-center gap-x-3">future<svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-6 w-6 animate-pulse fill-[#7f7cff] stroke-[#7f7cff] sm:h-8 sm:w-8"><polygon
                                points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>of execution</span></h1>
                            <p className={"mt-2 max-w-2xl text-base leading-tight tracking-tight text-slate-400 sm:text-sm"}>
                                {text1}
                            </p>
                        </span>
                        <span className={"mt-6 flex flex-row items-center gap-x-4 sm:mt-8"}>
                            <a href={"#"}
                               className="primary-button button-glow flex flex-row items-center ">Download</a>
                            <a href={"https://t.me/RobloxExeHack"} target={"_blank"}>
                                <button className="secondary-button flex flex-row items-center">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="ml-2 h-4 w-4 text-slate-400"><line x1="5"
                                                                                                               x2="19"
                                                                                                               y1="12"
                                                                                                               y2="12"></line><polyline
                                        points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </a>

                        </span>
                    </div>
                </div>
            </section>
            <section id="stats" className="bg-slate-900 px-4 py-24"><span
                className="flex flex-col items-center text-center"><h3
                className="text-3xl font-semibold text-slate-100 sm:text-4xl">Trusted by users worldwide</h3><p
                className="mt-2 text-slate-400">We're proud to have users from all over the world, and we're always looking to expand our community.</p></span>
                <div className="mx-auto mt-14 max-w-7xl px-6 lg:px-8">
                    <dl className="flex gap-x-8 gap-y-16 text-center">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-400">Total downloads</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">2M+</dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-slate-400">Times launched</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">5M+</dd>
                        </div>
                    </dl>
                </div>
            </section>
            <section>
                <div className={"mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 sm:py-32"}>
                    <span className="text-center">
                        <span
                        className="text-gradient text-base font-medium uppercase leading-7">Why Delta?
                        </span>
                        <h2
                        className="mt-4 text-3xl font-semibold text-slate-100 sm:text-4xl">Built for the future
                        </h2>
                        <p
                        className="mt-2 max-w-3xl text-lg leading-tight tracking-tight text-slate-400">RobloxExe, we're always looking to improve our product and provide the best experience possible. We're constantly updating our product with new features.
                        </p>
                    </span>
                    <FeaturesSection />

                </div>
            </section>
            <section>
                <div className={"mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"}>
                    <div
                        className={"relative isolate overflow-hidden bg-slate-900 px-6 pt-16 shadow-2xl sm:rounded-lg sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"}>
                        <svg viewBox="0 0 1024 1024"
                             className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                             aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                    fill-opacity="0.7"></circle>
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stop-color="#7f7cff"></stop>
                                    <stop offset="1" stop-color="#a59bff"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"><h2
                            className="text-3xl font-semibold text-white sm:text-4xl">Ready to get started?<br/>It's
                            free!</h2><p className="mt-6 text-lg leading-tight tracking-tight text-slate-400">The program from the creators of RobloxExe is free, and you can play with your favorite software right now. What are you waiting for?</p>
                            <div
                                className="mt-10 flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                                <button className="primary-button flex flex-col items-start">Download software for your game
                                </button>
                                <a target="_blank" rel="noopener noreferrer" href="https://t.me/RobloxExeHack">
                                    <button className="secondary-button">Join our Telegram</button>
                                </a></div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                alt="Platform preview"
                                src="../../public/321.jpg"
                                className="absolute left-0 top-0 w-[40rem] max-w-none rounded-xl lg:w-[57rem]"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main