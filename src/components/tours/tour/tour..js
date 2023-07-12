import "./tour.css"
import { Link, useParams } from "react-router-dom";
function Tour(props) {
    let { id } = useParams();
   
    return (

        <div>
            {props.tour.map((obj, i) => (
                <div key={i}>
                    <h3>{obj.name}</h3>
                    <p>
                        <Link to="/TourDetails"> <img src={obj.image} alt={obj.id} /></Link><br />

                    </p>

                </div>

            ))}
        </div>

    )

}

export default Tour;