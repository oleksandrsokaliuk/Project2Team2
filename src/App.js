import './App.css';
import NewChuck from './Components/chuckIPI';
import Words from './Components/Words';
import Input from './Components/Input';


function App() {
  return (
    <div className="App">
      <NewChuck />
      <Words />
      <br/>
      <Input />      
    </div>
  );
}

export default App;
