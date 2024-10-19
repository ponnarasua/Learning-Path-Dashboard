import React from 'react';
import user from '../data/user.json'
const skills = () => {
    const isLoogedin = true;
    return(
        <div className="w-full py-5 -z-10 inline-flex flex-row justify-center rounded-b-3xl sticky">
            {isLoggedin && 
                <div className="text-2xl font-bold">
                    <h1>Skills</h1>
                </div>
            }
        </div>
    )
}
export default skills