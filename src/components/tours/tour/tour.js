import "./tour.css"
import { Link, useParams } from "react-router-dom";
function Tour({image,name,id}) {
 
    return (

        <div>
            <Link to={`city/${id}`}>
                <img src={image} alt={name}/>
            </Link>
        </div>

    )

}

export default Tour;