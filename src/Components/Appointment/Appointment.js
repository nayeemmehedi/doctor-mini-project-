import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Appointment = () => {


  let user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();

  const done = () => {

    alert("succesfully done..")

    history.push("/");


  };




  return (
    <div>
      <div>
        <div
          style={{ height: "800px" }}
          className="row p-lg-5 p-md-0 p-sm-0  text-white bg-dark"
        >
          <div className="col-lg-4 col-md-6 col-sm-12"></div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <form >
              <h1>Appointment Form....</h1>
              <div className="mb-lg-3">
                <label for="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  value={user.name || null}
                  required
                  type="text"

                  placeholder="Name Please"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Username
                </div>
              </div>
              <div className="mb-lg-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  value={user.email}
                  required
                  type="email"

                  placeholder="Email Please"
                  name="email"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-lg-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Time
                </label>
                <input

                  required
                  type="datetime-local"
                  name="time"
                  className="form-control"
                  id="exampleInputPassword1"

                />
              </div>
              <div className="mb-lg-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Your Location
                </label>

                <input
                  required
                  type="text"
                  name="location"
                  className="form-control"
                  id="exampleInputPassword1"

                />
              </div>
              <div className="mb-lg-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Your Phone Number
                </label>

                <input
                  required
                  type="number"
                  name="location"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="01923******"

                />
              </div>
              <div className="mb-lg-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Doctor Name
                </label>

                <input
                  required
                  type="text"
                  name="doctor"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Anik Shah"

                />
              </div>

              <input
                onClick={done}
                type="submit"
                value="Confirm Appointment"
                className="btn btn-primary"
              />
            </form>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12"></div>
        </div>
      </div>

    </div>
  );
};

export default Appointment;