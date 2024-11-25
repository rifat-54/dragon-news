import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContex);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "name should be more 5 character" });
      return;
    }
    const email = form.get("email");
    const photourl = form.get("photourl");
    const password = form.get("password");
    // console.log(name, email, password, photourl);
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUser({ displayName: name, photoURL: photourl })
          .then(() => {
            navigate("/");
            // console.log('how mow cow')
          })
          .catch((error) => {
            // console.log('ERROR',error);
          });
        
      })
      .catch((error) => {
        // console.log("ERROR", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card py-14 bg-base-100 w-full  shrink-0 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mt-6">Register now!</h1>
          <form onSubmit={handleSubmit} className="card-body w-[500px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
              {error.name && (
                <label className="label text-red-600">{error.name}</label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photourl"
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-red-500" to={"/auth/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
