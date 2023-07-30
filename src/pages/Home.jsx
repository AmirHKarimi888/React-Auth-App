
export const Home = () => {

    return (

        <div className="home">
            <div className="mx-auto w-[330px] p-6 bg-gray-200 border border-gray-400 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Authentication App</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Welcome to may app! This is an app for authentication. You can sign up to my website now!</p>
                <a href="/signup" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign Up
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

    )
}