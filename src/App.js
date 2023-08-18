import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';


function App() {

  useEffect(()=>{
    document.title = "My Portfolio"
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
