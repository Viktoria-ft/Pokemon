import './App.css';
import CardsSection from './components/CardsSection/CardsSection';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import MapSection from './components/MapSection/MapSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <CardsSection/>
      <MapSection/>
      </div>
  );
}

export default App;
