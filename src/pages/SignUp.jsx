import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {  useEffect, useState } from "react"
import { Action, url } from "../api"
import { SignUpSuccess } from "../components/SignUpSuccess"
import { SignUpFail } from "../components/SignUpFail"

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d+/).required(),
    repeatPassword: yup.string().oneOf([yup.ref("password")], "Doesn't match the main password"),
    checked: yup.boolean().required("Must be checked")
})

export const SignUp = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        Action.get(url + "users", (response) => {
            users = response.data;
            setUsers(users);
        })
    }, [])

    const toggleSignUpSuccessModal = () => {
        const signUpSuccessModal = document.querySelector("#signUpSuccessModal");

        if(signUpSuccessModal.classList.contains("hidden")) {
            signUpSuccessModal.classList.remove("hidden");
        } else {
            signUpSuccessModal.classList.add("hidden");
        }
    }

    const toggleSignUpFailModal = () => {
        const signUpFailModal = document.querySelector("#signUpFailModal");

        if(signUpFailModal.classList.contains("hidden")) {
            signUpFailModal.classList.remove("hidden");
        } else {
            signUpFailModal.classList.add("hidden");
        }
    }

    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

    const onFormSubmit = (data) => {
    const userExistanceCheck = document.querySelector("#userExistance");

        const newUser = {
            "id": users.length + 1,
            "username": data.username,
            "email": data.email,
            "avatar": `https://xsgames.co/randomusers/assets/avatars/pixel/${users.length + 1}.jpg`,
            "password": data.password,
            "userId": Math.round(Math.random() * 10000000000),
            "role": "User"
        }



        let repeatitiveUser = users.filter((user) => {
            if(data.email == user.email) {
                return user;
            }
        })
        

        if(repeatitiveUser[0]) {
            userExistanceCheck.classList.remove("hidden");
        } else {
            userExistanceCheck.classList.add("hidden");
            Action.post(url + "users", newUser)
            .then(()=> {
                toggleSignUpSuccessModal();
                localStorage.setItem("signedUser", newUser.userId);
            })
            .then(() => {
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000)
            })
            .catch(() => {
                toggleSignUpFailModal();
            })
        }
    }

    return (
        <div className="signUp">
            <form onSubmit={ handleSubmit(onFormSubmit) } className="w-[315px] mx-auto border border-gray-400 rounded-lg bg-gray-100 shadow-lg p-5 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" {...register("username")} id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="username" required />
                    <p id="usernameErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{ errors.username?.message }</span></p>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" {...register("email")} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
                    <p id="emailErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{ errors.email?.message }</span></p>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" {...register("password")} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                    <p id="passwordErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{ errors.password?.message }</span></p>
                </div>
                <div className="mb-6">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                    <input type="password" {...register("repeatPassword")} id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="repeat password" required />
                    <p id="repPasswordErr" className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">{ errors.repeatPassword?.message }</span></p>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" {...register("checked")} value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    <p className="text-red-500 mt-2">{ errors.checked?.message }</p>
                </div>
                <button type="submit" id="submitBtn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                <p id="userExistance" className="hidden text-red-500 mt-2">User already exists</p>
            </form>
            <p id="userExistance" className="text-center text-cyan-700 mt-5">Do you have an account? <a href="/signin" className=" text-blue-500">Sign In</a></p>
            <SignUpSuccess toggleSignUpSuccessModal={ toggleSignUpSuccessModal } />
            <SignUpFail toggleSignUpFailModal={ toggleSignUpFailModal } />
        </div>
    )
}