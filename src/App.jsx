import Header from './components/header'
import Hero from './components/hero'
import Timeline from './components/timeline'
import Footer from './components/footer'
import Projects from './components/projects'
import Stack from './components/stack'
import Contact from './components/contact'


export default function App() {

  return (
    <div className="bg-white dark:bg-[#2b0076]">
      <Header/>
        <main className="isolate">
          <Hero/>
          <Timeline/>
          <Projects/>
          <Stack/>
          <Contact/>
        </main>
        
      <Footer/>
    </div>

  )
}
