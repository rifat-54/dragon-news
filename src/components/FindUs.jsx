import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 mt-14">Find Us On</h2>
      <div className="join flex gap-1 *:bg-gray-200  join-vertical">
        <button className="btn justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn justify-start join-item"><FaTwitter></FaTwitter> Twitrer</button>
        <button className="btn justify-start join-item"><FaInstagram></FaInstagram> Instragram</button>
      </div>
    </div>
  );
};

export default FindUs;
