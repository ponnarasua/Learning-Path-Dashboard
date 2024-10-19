import React from 'react';
import user from '../data/user.json'
const Home =() =>{
    const isLoggedin = true;
    return(
        <div className="w-full py-5 -z-10 inline-flex flex-row justify-center rounded-b-3xl sticky">
            {isLoggedin && 
                    <div className=''>
                <div className="text-2xl font-bold">
                        <h1>Welcome {user.name}</h1>
                    </div>
                    <div>

                    </div>
                </div>
            }
        </div>
    )
}
export default Home;