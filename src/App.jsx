import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from "./pages/Home"
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {


  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
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
      </QueryClientProvider>
    </div>
  )
}

export default App
