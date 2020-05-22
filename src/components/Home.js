import React, {Fragment} from "react";
import { Link } from  'react-router-dom'


const Home = () => {
  return (
    <Fragment>
      Header here
      header here
      <div>
        image here with form link
        <p>
        <Link to='/pizza'><button> Order Pizza</button></Link>
        </p>
      </div>
      <div>
        cards for restaurantes here
        3 columns
        2 rows
      </div>
      
      
    </Fragment>
  )
}

export default Home
