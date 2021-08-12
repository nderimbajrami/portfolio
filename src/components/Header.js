import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                {/* <h1>NDERIM BAJRAMI</h1> */}
                <ReactTyped 
                    className="typed-text"
                    strings={["N","ND", "NDE", "NDER", "NDERI","NDERIM","NDERIM B","NDERIM BA","NDERIM BAJ","NDERIM BAJR","NDERIM BAJRA","NDERIM BAJRAM", "NDERIM BAJRAMI"]}
                    typeSpeed={10}
                    backSpeed={60}
                    loop
                />
                <ReactTyped 
                    className="typed-text"
                    strings={["Front End Developer","Web Development", "Web Design", "Responsive Design", "User Friendly Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="https://github.com/nderimbajrami/" target="_blank" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
