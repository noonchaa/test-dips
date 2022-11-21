import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Services from './components/services';
import Team from './components/team';
import Value from './components/value';
import WorkFlow from './components/workflow';

function App() {
  return (
    <div>
      <Hero/>
      <Services/>
      <WorkFlow/>
      <Portfolio/>
      <About/>
      <Team/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
