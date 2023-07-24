import { useEffect, useState } from "react"

export const Header = () => {

    const toggleVerticalNav = () => {
        const verticalNav = document.querySelector("#verticalNav");

        if (verticalNav.classList.contains("hidden")) {
            verticalNav.classList.remove("hidden");
        } else {
            verticalNav.classList.add("hidden");
        }
    }

    const main = document.querySelector("html");

    useEffect(() => {
        const dayIcon = document.querySelector("#theme-toggle-light-icon");
        const nightIcon = document.querySelector("#theme-toggle-dark-icon");

        if (localStorage.getItem("theme")) {
            if (localStorage.getItem("theme") == "light") {
                dayIcon.classList.add("hidden");
                nightIcon.classList.remove("hidden");

            } else if (localStorage.getItem("theme") == "dark") {
                main.classList.add("dark");
                dayIcon.classList.remove("hidden");
                nightIcon.classList.add("hidden");

            }
        }
    }, [])

    const toggleTheme = () => {
        const dayIcon = document.querySelector("#theme-toggle-light-icon");
        const nightIcon = document.querySelector("#theme-toggle-dark-icon");

        if (main.classList.contains("dark")) {
            main.classList.remove("dark");
            dayIcon.classList.add("hidden");
            nightIcon.classList.remove("hidden");
            localStorage.setItem("theme", "light");

        } else {
            main.classList.add("dark");
            dayIcon.classList.remove("hidden");
            nightIcon.classList.add("hidden");
            localStorage.setItem("theme", "dark");
        }
    }

    return (
        <header>
            <div className="navbar">

                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AmirHK888</span>
                        </a>

                        <div className="flex md:order-2 gap-3">
                            <button onClick={toggleTheme} id="theme-toggle" type="button" className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <i id="theme-toggle-dark-icon" className="fa fa-moon-o text-xl"></i>
                                <i id="theme-toggle-light-icon" className="hidden fa fa-sun-o text-xl"></i>
                            </button>

                            <button className="relative hidden md:inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    <a href="/signup">Sign Up</a>
                                </span>
                            </button>

                            <button onClick={toggleVerticalNav} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <i className="fa fa-bars text-xl"></i>
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="hidden md:hidden w-full md:w-auto" id="verticalNav">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-sky-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-2">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-gray-100 rounded bg-sky-500 hover:bg-sky-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </li>
                            <li>
                                <a href="/signup" className="block py-2 pl-3 pr-4 text-gray-100 rounded bg-sky-500 hover:bg-sky-400 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
                            </li>
                        </ul>
                    </div>

                </nav>

            </div>
        </header>
    )
}