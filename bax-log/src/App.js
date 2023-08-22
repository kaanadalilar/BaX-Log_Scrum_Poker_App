import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PokerPage from './pages/PokerPage';


function App() {
  return (
    <div className="App">
      <Header /> 
        <main className="App-main">
          <PokerPage /> 
           <img src={logo} className="App-logo" alt="logo" />
           <p>
            Edit <code>src/App.js</code> and save to reload.
           </p>
         </main>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
