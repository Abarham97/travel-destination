// import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
const data= require('./data/data.json')
function App() {


  return (
    <div className="App">

 
      <Home data={data}/>
    </div>

  );
}

export default App;


