// import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import NavBar from './components/NavBar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Tour
 from './components/tours/tour/tour.';
import TourDetails from './components/TourDetails/TourDetails';


function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/city/:id"element={<Tour/>}/>
        <Route path="/TourDetails/" element={<TourDetails/>}/>
       
      </Routes>

     
    </div>

  );
}

export default App;


