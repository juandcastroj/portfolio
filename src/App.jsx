import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx'
import Footer from './components/footer.jsx'
import HomeRoute from './routes/HomeRoute.jsx';
import Search from './routes/MoviesRoute.jsx';
import Tiktaktoe from './routes/GameRoute.jsx';
import ContactRoute from './routes/ContactRoute.jsx';
import ProjectsRoute from './routes/ProjectsRoute.jsx';
import StackRoute from './routes/StackRoute.jsx';
import './assets/css/bg.css'
import TodoRoute from './routes/TodoRoute.jsx';
import EmailSentRoute from './routes/EmailSentRoute.jsx';
import BlogRoute from './routes/BlogRoute.jsx';
import Background from './components/Background.tsx';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext.tsx';

export default function App() {

  const { theme } = useContext(ThemeContext)

  return (
      <>
        <Background theme={theme} />
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
      </>
  )
}
