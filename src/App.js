import './App.css';
import Hero from './components/hero';
import Portfolio from './components/portfolio';
import Services from './components/services';
import WorkFlow from './components/workflow';

function App() {
  return (
    <div>
      <Hero/>
      <Services/>
      <WorkFlow/>
      <Portfolio/>
    </div>
  );
}

export default App;
