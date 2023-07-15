import { Link,useParams } from "react-router-dom"
import { useState } from "react";
import "./TourDetails.css"
import data from '../../data/data.json';






function TourDetails(props){
let {id}=-useParams();
let [limit, islimited]=useState(true);
return (

    <>
  {
    data.filter((obj)=>{

        return obj.id===id;
    }).map((obj)=>{

        return <div>
        <div>
            <img src={obj.image}></img>
            <div>
                <h1>{obj.name}</h1>
                <hr></hr>
                <h2>Price :{obj.price}</h2>
                {limit ?<p>{obj.info.substring(0,300)+"..."}</p>:<p>{obj.info}</p>}
                <button onClick={()=>islimited(!limit)}>{limit?"see More":"seeless"}</button>
            
            </div>
            </div>
        </div>
    })


  }
    </>
)
}


export default TourDetails
