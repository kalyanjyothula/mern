import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  changeUserDetails,
  createUserAccount,
  signupPageSelector,
} from "./reducer";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails, loading, isSuccess, isError } =
    useSelector(signupPageSelector);

  useEffect(() => {
    if (isSuccess) {
      navigate("/app");
    }
    if (isError) toast.error("Something Went Wrong!");
  }, [isSuccess, navigate, userDetails, isError]);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    const { name, value } = e.target;
    dispatch(changeUserDetails({ name, value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { password, rePassword, name, email } = userDetails;
    if (password !== rePassword) {
      toast.error("Password Mismatched !");
    } else {
      console.log("action dispatched !");
      dispatch(createUserAccount({ name, email, password }));
    }
  };

  return (
    <section style={{ background: "#eee", paddingTop: "2rem" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: `25px` }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleOnSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            id="form3Example1c"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            name="email"
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="form3Example4c"
                            className="form-control"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            name="rePassword"
                            className="form-control"
                            onChange={handleChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          {" "}
                          {loading ? (
                            <Spinner animation="border" />
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
