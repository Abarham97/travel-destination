

import './Tours.css'
import Tour from './tour/tour';
import tour from "../../data/data.json"



function Tours(props) {

    return (
        <div>
            
            <Tour tour={tour} />
        </div>

    )

}

export default Tours;