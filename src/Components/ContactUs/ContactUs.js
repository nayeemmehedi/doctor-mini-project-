import React from 'react';
import picture from "../Picture/s.jpg"
import  '../../styleCSS/StyleCss.css'


const ContactUs = () => {
    return (
        <div>
            <div class="container">



                <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12 text-center">
                        <img className="se2" src={picture} alt="" />
                    </div>




                    <div class="col-lg-6 col-md-12 col-sm-12">

                     <div className ="my-5">
                      <h3 className="text-center" style={{color:"#128594"}}>Contract Us </h3>
                     
                     
                     </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text">We'll never share your phone number with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Text Us </label>
                                <textarea type="textarea" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class ="form-text"></div>
                            </div>
                            
                           
                            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
                        </form>
                    </div>


                  



                </div>


            </div>


        </div>



    );


};


export default ContactUs;