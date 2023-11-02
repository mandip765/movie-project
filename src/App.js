import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import Homepage from './pages/Homepage'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Contacts from './pages/Contacts'
import CategoryMovie from './pages/CategoryMovie'
import MovieDetail from './pages/detail/MovieDetail'
import SearchPage from './pages/search/SearchPage'
import MoviePage from './pages/movie_page/MoviePage'
import PageRoute from './pages/sample/PageRoute'
import SampleHome from './pages/sample/SampleHome'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route index element={<SampleHome />} />
        <Route path='/page/:cata/:pages' element={<PageRoute />} />

        {/* 
        <Route index element={<Homepage />} /> */}



        <Route path='movie/:category' element={<CategoryMovie />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='movie/search/:query' element={<SearchPage />} />
        <Route path='movie/page/:category/:page' element={<MoviePage />} />

        <Route path='*' element={<Notfound />} />

      </Route>

    </Routes>
  )
}

export default App