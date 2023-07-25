import { useEffect, useState } from "react"
import { Sidebar } from "./Sidebar";

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

    let [sidebarView, setSidebarView] = useState(false);
    const toggleSidebar = () => {
        if(sidebarView === true) {
            setSidebarView(false);
        } else {
            setSidebarView(true);
        }
    }

    return (
        <header>
            <div className="navbar">

                <nav className=" bg-sky-600 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-gray-600">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">AmirHK888</span>
                        </a>

                        <div className="flex md:order-2 gap-3">
                            <button onClick={toggleTheme} id="theme-toggle" type="button" className="md:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <i id="theme-toggle-dark-icon" className="fa fa-moon-o text-xl"></i>
                                <i id="theme-toggle-light-icon" className="hidden fa fa-sun-o text-xl"></i>
                            </button>

                            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <i className="fa fa-sign-in text-xl"></i>
                            </button>                           

                            <button onClick={toggleVerticalNav} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <i className="fa fa-bars text-xl"></i>
                            </button>
                            
                            <button onClick={ toggleSidebar } type="button" className="items-center text-sm rounded-full focus:ring-4" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                            </button>
                        </div>

                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-400 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
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
                    
                    { sidebarView && <Sidebar /> }
                </nav>
            </div>
        </header>
    )
}