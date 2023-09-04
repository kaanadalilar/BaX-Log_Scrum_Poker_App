import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PokerPage from './pages/PokerPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
