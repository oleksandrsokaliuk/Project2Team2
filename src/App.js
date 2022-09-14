import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import NewChuck from "./Components/chuckIPI";
import Words from "./Components/Words";
import Clock from "./Components/Clock";
import WordsNew from "./Components/WordsNew";
import Start from "./Components/Start";
import Room from "./Components/Room";
import ListOFUsers from "./Components/ListOfUsers";
import Performer from "./Components/Performer";
import Gamers from "./Components/Gamers";


let usersArray = [{id:1},{id:2},{id:3},{id:4},{id:5},];
let randUs = usersArray[Math.floor(Math.random()*usersArray.length)];
console.log(randUs);
console.log(typeof(randUs));


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
          <Route path="/users" element={<ListOFUsers/>}/>
          <Route path="/room" element={<Room/>}/>
          <Route path="/room/perf" element={<Performer />}/>
          <Route path="/room/gamers" element={<Gamers />}/>
          {/* <Route path="users" element={<Home/>}/>           */}
        </Routes>    
      </div>
    </Router>
  );
}

export default App;
