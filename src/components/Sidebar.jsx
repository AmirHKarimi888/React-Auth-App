import { CheckSignOut } from "./CheckSignOut";

export const Sidebar = (props) => {
    let signedUser = props.signedUser;

    const toggleSignOutModal = () => {
        const signOutModal = document.querySelector("#signOutModal");

        if (signOutModal.classList.contains("hidden")) {
            signOutModal.classList.remove("hidden");
        } else {
            signOutModal.classList.add("hidden");
        }
    }

    const signOut = props.signOut;

    return (
        <div className="hidden fixed sidebar items-center pt-0 ml-3 right-0 w-[100%] h-[100%] backdrop-blur-sm bg-gray-700/30" id="sidebar" onClick={ props.toggleSidebar }>
            <aside onClick={ (event) => { event.stopPropagation() } } id="logo-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x bg-white border-l border-gray-300 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800  divide-y divide-gray-300">
                    <div className="px-4 py-6" role="none">
                        <button type="button" className=" pb-4 items-center text-sm rounded-full" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-10 h-10 rounded-full" src={ signedUser?.avatar } alt="user photo" />
                        </button>
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                            { signedUser?.username }
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                            { signedUser?.email }
                        </p>
                    </div>
                    <ul className="space-y-2 pt-6 font-medium">
                        <li>
                            <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <i className="fa fa-dashboard"></i>
                                <span className="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <i className="fa fa-inbox"></i>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <i className="fa fa-user"></i>
                                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </a>
                        </li>
                        <li onClick={ toggleSignOutModal }>
                            <a className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <i className="fa fa-sign-out"></i>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <CheckSignOut toggleSignOutModal={ toggleSignOutModal } signOut={ signOut } />
        </div>
    )
}