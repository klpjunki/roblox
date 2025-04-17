
function Header(download) {
    return (
        <header className="fixed z-50 flex w-full flex-col text-white">
                <nav className={"mx-auto flex w-full flex-row items-center justify-between px-6 py-4 backdrop-blur transition-all duration-200 lg:justify-center lg:py-8 xl:px-32"}>
                    <div className={"left-6 lg:absolute xl:left-32"}>
                        <a href={"https://t.me/RobloxExeHack"} target={"_blank"} className={"text-2xl font-medium text-white"}>RobloxExe</a>
                    </div>
                        <ul className={"hidden flex-row items-center space-x-4 lg:flex"}>
                            <li>
                                <a href={"https://tailwindcss.com/docs/color"} target={"_blank"} className={"text-slate-500 text-sm font-medium uppercase transition-colors duration-200 hover:text-slate-400"} >Windows</a>
                            </li>
                            <li>
                                <a href={"https://t.me/RobloxExeHack"} target={"_blank"} className={"text-slate-500 text-sm font-medium uppercase transition-colors duration-200 hover:text-slate-400"}>Telegram</a>
                            </li>
                        </ul>
                    <span className={"flex flex-row items-center space-x-2"}>
                        <div className={"right-6 lg:absolute xl:right-32"}>
                            <a href={"https://tailwindcss.com/docs/color"} target={"_blank"} className={"secondary-button"}>Download</a>
                        </div>
                    </span>
                </nav>
        </header>
    )
}
export default Header