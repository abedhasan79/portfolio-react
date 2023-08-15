
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
