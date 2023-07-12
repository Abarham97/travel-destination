
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";


import './Home.css'
import TourDetails from "../TourDetails/TourDetails";

function Home(props) {

   return (
      <div>
         <Header />

         <Tours />
         <TourDetails/>

         <Footer />
      </div>

   );



}


export default Home;