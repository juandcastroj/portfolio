import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home';
import Todo from './pages/todo';
import Search from './pages/search';
import Tiktaktoe from './pages/tiktaktoe';
import ContactUsRoute from './pages/contact_us';
import ProjectsRoute from './pages/projects';
import StackRoute from './pages/stack';
import './assets/css/bg.css'

export default function App() {

  return (
    <BrowserRouter>
      <div id="bg-section">
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
          <main className="isolate">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/contact' element={<ContactUsRoute/>}></Route>
              <Route path='/projects' element={<ProjectsRoute/>}></Route>
              <Route path='/stack' element={<StackRoute/>}></Route>
              <Route path='/todo' element={<Todo/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path='/game' element={<Tiktaktoe/>}></Route>
              <Route path='*' element={<Home/>}></Route>
            </Routes>
            <Footer/>
          </main>
      </div>
    </BrowserRouter>
  )
}
