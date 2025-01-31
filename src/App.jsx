import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home';
import ContactUs from './pages/contact_us';


export default function App() {

  return (
    <BrowserRouter>

      <Header/>
        <div className="bg-white dark:bg-[#2b0076]">
            <main className="isolate">

              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<ContactUs/>}></Route>
              </Routes>

          </main>
          <Footer/>
        </div>
    
    </BrowserRouter>
  )
}
