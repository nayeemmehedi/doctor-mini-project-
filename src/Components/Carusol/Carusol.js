import React from 'react';

const Carusol = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators col-lg-6 col-md-12 col-md-12">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <img style={{ objectFit: "none", height: '450px', width: '550px' }}

                            src="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1580196666465-doctor.jpg" class="d-block w-100" alt="..." />

                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontFamily: "Besley" }}>"Observation, Reason, Human Understanding, Courage; these make the physician."</h5>
                            <button class="btn btn-primary rounded-pill " style={{ fontFamily: "Besley" }}>BOOK SESSION</button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img style={{ objectFit: "none", height: '400px', width: '500px' }}
                            src="https://reverehealth.com/static/a9ea21a8561911a438121c17a0634d6e/a5bf0/cover_image_4-01.png" class="d-block w-100" alt="..." />
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontFamily: "Besley" }}>“I would still ‘do it again’ despite all the difficulty of training and roadblocks to just practice medicine. Truly is worth it!”</h5>
                            <button class="btn btn-primary rounded-pill" style={{ fontFamily: "Besley" }}>BOOK SESSION</button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img style={{ objectFit: "none", height: '450px', width: '550px' }}
                            src="https://previews.123rf.com/images/lithian/lithian1603/lithian160300106/53995140-portrait-of-a-beautiful-young-woman-doctor-with-stethoscope-.jpg" class="d-block w-100" alt="..." />
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontFamily: "Besley" }}>"[As a doctor] people will trust you, confide in you, and appreciate your efforts.  You can do amazing things for people if you don’t let the system get you down."</h5>
                            <button class="btn btn-primary rounded-pill" style={{ fontFamily: "Besley" }}>BOOK SESSION</button>
                        </div>

                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Carusol;