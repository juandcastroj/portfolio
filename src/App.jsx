import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'

import HomeRoute from './routes/HomeRoute';
import Search from './routes/MoviesRoute';
import Tiktaktoe from './routes/GameRoute';
import ContactRoute from './routes/ContactRoute';
import ProjectsRoute from './routes/ProjectsRoute';
import StackRoute from './routes/StackRoute';
import './assets/css/bg.css'
import TodoRoute from './routes/TodoRoute';

export default function App() {

  return (
    <BrowserRouter>
      <div id="bg-section">
            {/* SPANS FOR DARK BACKGROUND ANIMATION ONLY! */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          <Header/>
            <main className="isolate font-serif antialiased">
              <Routes>
                <Route path='/' element={<HomeRoute/>}></Route>
                <Route path='/contact' element={<ContactRoute/>}></Route>
                <Route path='/projects' element={<ProjectsRoute/>}></Route>
                <Route path='/stack' element={<StackRoute/>}></Route>
                <Route path='*' element={<HomeRoute/>}></Route>

                {/* These routes and only for practice purposes, they are not part of the portfolio. */}
                <Route path='/todo' element={<TodoRoute/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/game' element={<Tiktaktoe/>}></Route>
              </Routes>

                <Footer/>
            </main>
      </div>
    </BrowserRouter>
  )
}
