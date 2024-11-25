import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-5'>Login With</h2>
            <div className='space-y-2 *:w-full'>
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;