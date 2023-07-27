import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { useEffect, useState } from "react"
import { Action, url } from './api'

import { Home } from "./pages/Home"
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { useQuery } from "react-query"


function App() {

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

  const toggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");

    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
    } else {
      sidebar.classList.add("hidden");
    }
  }


  let [users, setUsers] = useState([]);
  let [signedUser, setSignedUser] = useState({});

  // useQuery(["users"], () => {

  // })

  useEffect(() => {
    Action.get(url + "users", (response) => {
      users = response.data;
      setUsers(users);
    })
      .then(() => {
        if (localStorage.getItem("signedUser")) {
          users.filter((user) => {
            if (parseInt(localStorage.getItem("signedUser")) === parseInt(user.userId)) {
              signedUser = user;
              setSignedUser(signedUser);
            }
          })
        }
      })
  }, [])

  const signOut = () => {
    signedUser = "";
    setSignedUser(signedUser);
    localStorage.setItem("signedUser", "")
  }

  useEffect(() => {
    const toggleSidebarBtn = document.querySelector("#toggleSidebarBtn");
    if (localStorage.getItem("signedUser") !== "") {
      toggleSidebarBtn.classList.remove("hidden");
    } else {
      toggleSidebarBtn.classList.add("hidden");
    }
  }, [localStorage.getItem("signedUser")])


  return (
      <div className="App">

        <BrowserRouter>
          <Header toggleVerticalNav={toggleVerticalNav} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} signedUser={signedUser} signOut={signOut} />

          <main className='my-[200px]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>


        </BrowserRouter>

      </div>
  )
}

export default App
