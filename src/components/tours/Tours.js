
import './Tours.css'

function Tours(props){

    return(

       <div>
        {props.data.map((obj,i)=>(
            <div key={i}>
                <h3>{obj.name}</h3>
                <img src={obj.image}alt={obj.id}/> 
                </div>
        ))}
       </div>
    )

}

export default Tours;