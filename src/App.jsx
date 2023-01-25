import './App.css'
import About from './components/About'
import Footer from './components/Footer';
import Info from './components/Info'
import Interests from './components/Interests';
import salarInfo from './data/salar';

function App() {
  const { general, about, interests, socialHandles } = salarInfo;

  return (
    <div className="container">
      <div className="main">
        <Info {...general} />
        <About about={about} />
        <Interests interests={interests} />
        <Footer socialHandles={socialHandles} />
      </div>
    </div>
  )
}

export default App
