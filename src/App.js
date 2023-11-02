import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Crud from './components/Crud'
import NewPage from './pages/NewPage'
import UpdateCrud from './components/UpdateCrud'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Homepage />} />
        <Route path='update-some/:id' element={<UpdateCrud />} />
        <Route path='About' element={<About />} />
        <Route path='NewPage' element={<NewPage />} />
        <Route path='Contacts' element={<Contacts />} />
        <Route path='Crud' element={<Crud />} />
        <Route path='*' element={<Notfound />} />

      </Route>

    </Routes>
  )
}

export default App