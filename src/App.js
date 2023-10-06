
import './App.css';
import Header from './components/Header';
import Prices from './components/Prices';
import Services from './components/Services';





function App() {
  return (
    <div className="App">
      <Header />
      <Services/>
   
      
      {/* <Router>
        <Switch>
          <Route exact path="/" component={<Header />} />
          <Route path="/" component={<Services />} />
          <Route path="/Prices" component={<Prices />} />
          <Route path="/Services" component={<Services />} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
