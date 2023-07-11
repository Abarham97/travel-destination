
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from '/home/abarham/travel-destination/src/data/data.json';
import'./Home.css'

function Home(props)
{
 console.log(data);
    return (
     <div>  <Header/>
    
    <Tours data={props.data}/>


     <Footer/>
     </div>
       
        );
       


}


export default Home;