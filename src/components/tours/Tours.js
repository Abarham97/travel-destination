
import './Tours.css'

function Tours(props){

    return(

       <div>
        <p>{props.id}</p>
        <img src={props.image}></img>
       </div>
    )

}

export default Tours;