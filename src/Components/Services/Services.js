import React from 'react';
import fakedata from '../Tools/Tools.json';
import { Link,useHistory } from 'react-router-dom';
import "../../styleCSS/StyleCss.css"


const Services = () => {
    const history = useHistory();


    const funchClick =() =>{
          history.push("/appointment");
    }



    return (
        <div>
            <h2 className="text-center my-lg-2 my-md-0 my-sm-0 " style={{ fontFamily: 'Besley', color: "#303f9f" }}>TYPE OF <span style={{ fontFamily: 'Besley', color: "#007bff" }}>DOCTORS</span></h2>

            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">
                {
                    fakedata.map(v =>

                        <div className="col-lg-4 col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <img className="rounded serviceImage"  src={v.img} alt="" />

                            <h5 className="mt-3" style={{ color: "black"}}>Department: {v.name}</h5>

                            <h5  style={{ color: "white"}}>Name: {v.doctorName}</h5>

                            <p style={{ color: "#0207a8" ,}}> Description: {v.description}</p>

                            <div className="ps-lg-5 ms-lg-2 mb-lg-3 ps-md-0 ms-md-0 mb-md-0 ps-sm-0 ms-sm-0 mb-sm-0">

                                <button onClick={funchClick} className="btn btn-danger rounded-pill">Appointment Me</button>

                            </div>




                        </div>



                    )
                }
            </div>


        </div>
    );
};


export default Services;