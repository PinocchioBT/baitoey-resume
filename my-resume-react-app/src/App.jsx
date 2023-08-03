import './App.css'
import Homepage from './components/homepage'
import About from './components/aboutmepage'
import WorkShowCase from './components/workpage'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className='homepage-section'>
       <Homepage/> 
      </div>
      <div className='aboutme-section'>
        <About/>
      </div>
      <div className='work-showcase-section'>
        <WorkShowCase/>
      </div>
      <div className='footer-section'>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
