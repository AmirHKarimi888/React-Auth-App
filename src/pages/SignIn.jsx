import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Action, url } from "../api"
import { useEffect, useState } from "react"
import { SignInSuccess } from "../components/SignInSuccess"

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).matches(/[a-z]+/).matches(/[A-Z]+/).required("Password is required")
})

export const SignIn = () => {

    const toggleSignInSuccessModal = () => {
        const signInSuccessModal = document.querySelector("#signInSuccessModal");

        if(signInSuccessModal.classList.contains("hidden")) {
            signInSuccessModal.classList.remove("hidden");
        } else {
            signInSuccessModal.classList.add("hidden");
        }
    }


    let [users, setUsers] = useState([]);

    useEffect(() => {
        Action.get(url + "users", (response) => {
            users = response.data;
            setUsers(users);
        })
    }, [])
    

    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

    const onFormSubmit = (data) =>{
        const userMatchCheck = document.querySelector("#userMatch");

        let user = users.filter((user) => {
            if(user.email === data.email && user.password === data.password) {
                return user;
            } 
        })

        if(user[0]) {
            localStorage.setItem("signedUser", user[0].userId);
            userMatchCheck.innerHTML = "";
            toggleSignInSuccessModal();
            setTimeout(() => {
                window.location.href="/dashboard";
            }, 1000)
        } else {
            userMatchCheck.innerHTML = "User doesn't exist";
        }
    }


    return (
        <div className="signIn">
            <form onSubmit={ handleSubmit(onFormSubmit) } className="w-[315px] mx-auto border border-gray-400 rounded-lg bg-gray-100 shadow-lg p-5 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" {...register("email")} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
                    <p id="emailErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.email?.message}</span></p>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" {...register("password")} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                    <p id="passwordErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{errors.password?.message}</span></p>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" {...register("checked")} value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    <p className="text-red-500 mt-2">{errors.checked?.message}</p>
                </div>
                <button type="submit" id="submitBtn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                <p id="userMatch" className="text-red-500 mt-2"></p>
            </form>

            <SignInSuccess toggleSignInSuccessModal={ toggleSignInSuccessModal } />
        </div>
    )
}