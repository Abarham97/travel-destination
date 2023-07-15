// import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import Header from './components/header/Header';
import {Routes,Route} from 'react-router-dom'

import TourDetails from './components/TourDetails/TourDetails';


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/city/:id'element={<TourDetails/>}/>
        
       
      </Routes>

     
    </div>

  );
}

export default App;


