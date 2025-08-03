
import {BrowserRouter as Router,Routes, Route  } from "react-router-dom"
import Navbar from "./component/sub-component/Navbar"
import Home from "./component/section/Home"
import About from "./component/section/About"
import Contact from "./component/section/Contact"
import Principal from "./component/section/Principal"
import Faqs from "./component/section/Faqs"
import Footer from "./component/sub-component/Footer"
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/principal-officers' element={<Principal/>}/>
          <Route path='/faqs' element={<Faqs/>}/>

        </Routes>
        <Footer />
      </Router>
    
    </>
  );
}

export default App
