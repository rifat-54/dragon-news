import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import navImg from "../assets/user.png";
import { AuthContex } from "../provider/AuthProvider";

const Navber = () => {
  const { logOut, user } = useContext(AuthContex);
  return (
    <div className="flex justify-between items-center ">
      <div>{user && <p>{user.email}</p>}</div>
      <div className="space-x-5">
        <NavLink className=" btn" to={"/"}>
          Home
        </NavLink>
        <NavLink className=" btn" to={"/about"}>
          About
        </NavLink>
        <NavLink className=" btn" to={"/career"}>
          Career
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <div>
          {user && user.email ? (
            <div className="grid grid-cols-1">
              <img
                className="w-14 h-14 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <small>{user.displayName}</small>
            </div>
          ) : (
            <img src={navImg} alt="" />
          )}
        </div>
        {user ? (
          <button className="btn btn-neutral" onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
