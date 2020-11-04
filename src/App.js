import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import PageHome from './Components/PageHome';
import PageNumber from './Components/PageNumber';
import PageWord from './Components/PageWord';
import PageColor from './Components/PageColor';

function App() {
  return (
    <div className="App">
      <Router>
        <PageHome path="/home" />
        <PageNumber path="/:input" />
        {/* <PageWord path="/:input" /> */}
        <PageColor path="/:input/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
