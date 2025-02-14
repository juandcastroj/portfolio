import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home';
import ContactUs from './pages/contact_us';
import Todo from './pages/todo';
import Search from './pages/search';


export default function App() {

  return (
    <BrowserRouter>

      <Header/>
        <div className="bg-white dark:bg-[#2b0076]">
            <main className="isolate">

              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<ContactUs/>}></Route>
                <Route path='/todo' element={<Todo/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='*' element={<Home/>}></Route>
              </Routes>

          </main>
          <Footer/>
        </div>
    
    </BrowserRouter>
  )
}
