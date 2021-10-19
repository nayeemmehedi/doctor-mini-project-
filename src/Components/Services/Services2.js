import React from "react";
import  '../../styleCSS/StyleCss.css'

const Services2 = () => {
  return (
    <div className="my-5" style={{ fontFamily: "Besley" }}>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="ms-5 mt-3 ps-5">
            <img
              className="img-fluid"
              style={{ objectFit: "cover" }}
              src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/4-min.jpg"
              class="d-block w-100 se1"
              alt="..."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
          <div className="m-4">
            <h2 style={{ fontFamily: "Besley", color: "#303f9f" }}>
              DR. KANIZ AFRIN
            </h2>
            <h4>Psychiatrist</h4>
            <div className="m-3">
              <p style={{ fontFamily: "Besley", color: "#0207a8" }}>
                Physiotherapists help people affected by injury, illness or
                disability through movement and exercise, manual therapy,
                education and advice. They maintain health for people of all
                ages, helping patients to manage pain and prevent disease.
              </p>
              <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>
                Mail me: mymail@gmail.com
              </h5>
              <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>
                Call me: +8801254 256 500
              </h5>
              <h5 style={{ fontFamily: "Besley", color: "deepPink" }}>
                Find me here: Smart tower, 254 Dhaka
              </h5>
            </div>
          </div>

          <div>
            <button class="btn btn-primary">See More</button>
          </div>
        </div>
      </div>

      <div class="container my-5 py-5">
        <div class="row">
          <h2 className="text-center mb-4 pb-4" style={{ color: "#303f9f" }}>
            Team Of Consultants
          </h2>
          <p style={{color:"#555555"}}>
            “Let the young know they will never find a more interesting, more instructive book than the patient himself.” 5. “The aim of medicine is to prevent disease and prolong life; the ideal of medicine is to eliminate the need of a physician.”
          </p>

          <div class="col">
            <img
              style={{ height: "260px", width: "230px", objectFit: "cover" }}
              src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/9-min.jpg"
              alt=""
            />
            <div className="ms-5 ps-2 mt-3">
              <h6 className="" style={{ color: "#555555" }}>
                Najnin Supa
              </h6>
              <h6 style={{ color: "#555555" }}>
                Neurologist
              </h6>


            </div>
          </div>
          <div class="col">
            <img
              style={{ height: "260px", width: "230px", objectFit: "cover" }}
              src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/5-min.jpg"
              alt=""
            />
            <div className="ms-5 ps-2 mt-3">
              <h6 className="" style={{ color: "#555555" }}>

                Irin Pervin
              </h6>
              <h6 style={{ color: "#555555" }}>
                Dermatologist
              </h6>


            </div>
          </div>

          <div class="col">
            <img
              style={{ height: "260px", width: "230px", objectFit: "cover" }}
              src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/4-min.jpg"
              alt=""
            />
            <div className="ms-5 ps-2 mt-3">
              <h6 className="" style={{ color: "#555555" }}>
                Dr. Kaniz Afrin
              </h6>
              <h6 style={{ color: "#555555" }}>
                Psychiatrist
              </h6>


            </div>
          </div>

          <div class="col">
            <img
              style={{ height: "260px", width: "230px", objectFit: "cover" }}
              src="http://demo.wphash.com/paglagarod/wp-content/uploads/2018/01/10-min.jpg"
              alt=""
            />
            <div className="ms-5 ps-2 mt-3">
              <h6 className="" style={{ color: "#555555" }}>
                KB Arif
              </h6>
              <h6 style={{ color: "#555555" }}>
                Surgeon

              </h6>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
