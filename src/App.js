
import './App.css';
import Header from './components/Header';
import Prices from './components/Prices';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Header />
       <Services />
      <Prices/>
    </div>
  );
}

export default App;
