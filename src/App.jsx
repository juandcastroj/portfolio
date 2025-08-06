import { Routes, Route } from 'react-router-dom';
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
import EmailSentRoute from './routes/EmailSentRoute';
import BlogRoute from './routes/BlogRoute';

export default function App() {

  return (
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

            <main className="isolate antialiased">
              <Routes>
                <Route path='/' element={<HomeRoute/>}></Route>
                <Route path='/contact' element={<ContactRoute/>}></Route>
                <Route path='/email-sent' element={<EmailSentRoute/>}></Route>
                <Route path='/projects' element={<ProjectsRoute/>}></Route>
                <Route path='/blog' element={<BlogRoute/>}></Route>
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
  )
}
