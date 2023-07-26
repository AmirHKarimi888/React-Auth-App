import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from "./pages/Home"
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />

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
