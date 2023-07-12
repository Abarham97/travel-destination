

import './Tours.css'
import Tour from './tour/tour.';
import TourDetails from '../TourDetails/TourDetails';
import tour from "../../data/data.json"


function Tours(props) {

    return (
        <div>
            <TourDetails tour={tour} />
            <Tour tour={tour} />
        </div>

    )

}

export default Tours;