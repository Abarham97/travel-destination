
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
    
    {data.map((data,i=>
            
    <Tours name={data.name}/>
         )
         )}


     <Footer/>
     </div>
       
        );
       


}


export default Home;