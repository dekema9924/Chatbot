
import Chat from './Components/Chat'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import { LocalRoute, ProtectedRoutes } from './AuthRoutes/Protectedroutes'


function App() {

  return (
    <>
      <Routes>

        {/* //localroutes */}
        <Route element={<LocalRoute/>}>
          <Route path='/' element={<About />} />
        </Route>

        {/* //protected route */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/gemini' element={
            <>
              <Header/>
              <Chat/>
            </>
          } />

        </Route>
      </Routes>
    </>
  )
}

export default App
