import React from "react";
import { Link } from "react-router-dom";


const Error = () => {
    return ( 
        <>
       <div className="container" style={{height:"20rem"}}>
            <div className="row mt-5">
                <h1 className="mt-5 fw-bolder text-danger">Pops Page Not Found 404 Error</h1>
                <p className="font-weight-bold">THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVING HAD ITS NAME CHANGED OR IS TEMPORARLY<br/> UNAVAILABLE</p>
            </div>
            <div className="row">
            <Link className="btn btn-success" to="/">Go Back Home</Link>
            </div>
            </div>

        </>
     );
}
 
export default Error;