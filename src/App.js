import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import NewChuck from "./Components/chuckIPI";
import Words from "./Components/Words";
import Input from "./Components/Input";
import Clock from "./Components/Clock";
import WordsNew from "./Components/WordsNew";
import Start from "./Components/Start";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Start />
        <br/>         
        <NewChuck />
        <br/>
        <br/>
        <Words />
        <WordsNew />
        <br />           
        <Clock /> */}
        <Routes>
          <Route path="/" element={<Start/>}/>
          {/* <Route path="room" element={<Room/>}/>
          <Route path="users" element={<Home/>}/>           */}
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
