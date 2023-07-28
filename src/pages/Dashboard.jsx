
export const Dashboard = (props) => {
    const signedUser = props.signedUser;

    return (
        <div className="dashboard">
            
<div class="w-full mx-auto max-w-sm bg-gray-200 border border-gray-400 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ signedUser.avatar } alt="Avatar"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ signedUser.username }</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{ signedUser.email }</span>
        <span class="mt-5 text-md text-orange-500">{ signedUser.role }</span>
    </div>
</div>

        </div>
    )
}