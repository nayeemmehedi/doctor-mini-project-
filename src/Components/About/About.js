import React from 'react';
import { MdFastfood } from "react-icons/md";
import "../../styleCSS/StyleCss.css"


const About = () => {
    return (
        <div>
            <div class="container ">
                <div class="row  mt-lg-5 mt-md-0 mt-sm-0 col-lg-12 col-md-12 col-sm-12">
                    <h2 style={{ textAlign: "center", color: "#a6704a", fontFamily: "Besley" }} >Welcome to “Mental Energy” <br />
                        More than 85% cases solved with success</h2>




                    <div class="col">
                        <img class="aboutImage" src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/home3-feature.png" alt="" />

                    </div>

                    <div class="col">
                        <div className="text-center m-2">
                            {" "}
                            <MdFastfood size={42} style={{ color: "#bc9c17" }} />
                        </div>

                        <hr />

                        <h2 style={{ color: "#1d625c", fontFamily: "Besley" }}>Talking about Problems.</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>The physiotherapist learns about your medical history. The physiotherapist assesses and diagnoses your condition. You receive a treatment plan that sets goals for you. You are prescribed a course of exercises and any assistive devices needed.</p>
                        <br />

                        <div className="text-center m-2">
                            {" "}
                            <MdFastfood size={42} style={{ color: "#bc9c17" }} />
                        </div>

                        <hr />


                        <h2 style={{ color: "#1d625c", fontFamily: "Besley" }}>Analysis Problem.</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>To investigate how physiotherapists talk about the choice of intervention for patients with NSLBP, particularly how professionals manage clinical encounters that may be experienced as challenging. Method: Discourse analysis was performed of four focus groups' talk. Twenty-one experienced physiotherapists working in primary health care in southern Sweden participated.</p>
                    </div>




                    <div class="col">

                        <div className="text-center m-2">
                            {" "}
                            <MdFastfood size={42} style={{ color: "#bc9c17" }} />
                        </div>

                        <hr />

                        <h2 style={{ color: "#1d625c", fontFamily: "Besley" }} >Ongoing Discussion.</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}> Physiotherapists support people at all stages of life to recover from injury, reduce pain and stiffness, increase mobility and movement and maximise function and quality of life, incorporating physical, psychological, emotional and social wellbeing.</p>
                        <br />


                        <div className="text-center m-2">
                            {" "}
                            <MdFastfood size={42} style={{ color: "#bc9c17" }} />
                        </div>

                        <hr />

                        <h2 style={{ color: "#a6704a", fontFamily: "Besley" }}>Success Stories</h2>

                        <p style={{ color: "#213859", fontFamily: "Besley" }}>Neck and back pain caused by problems in the muscles and skeleton. Problems in the bones, joints, muscles and ligaments, such as arthritis and the after-effects of amputation. Lung problems such as asthma. Disability as a result of heart problems.</p>

                    </div>





                </div>



            </div>
        </div>
    );
};

export default About;