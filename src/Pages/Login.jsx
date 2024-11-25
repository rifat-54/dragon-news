import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const [error,setError]=useState('')
  // console.log(error)

    const {loginUser,setUser}=useContext(AuthContex)
  const handleLogin = (e) => {

    e.preventDefault();
    const form=e.target;
    const password =form.password.value;
    const email=form.email.value;
    // console.log(password,email)
    loginUser(email,password)
    .then(result=>{
        setUser(result.user)
        {
           navigate(location?.state?location.state:'/');
        }
    })
    .catch(error=>{
        setError(error.code)
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card py-14 bg-base-100 w-full  shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mt-6">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body w-[400px]">
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
                  {
                    error && <p className="text-red-600">{error}</p>
                  }
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="text-red-500" to={"/auth/register"}>
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
