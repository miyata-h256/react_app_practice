import React from "react"
import {Link} from "react-router-dom"

const Header:React.FC = () => {
    return (
        <header className="flex justify-between text-left pb-1 border-b-2 border-purple-200">
            <div>
                <p className="text-5xl italic text-purple-100 text-shadow-purple-500 ">Home Page</p>
            </div>
            <div className="flex m-2">
                <input type="text" placeholder="Serch" className="input m-1" />
                <Link to="/login" className="text-[#e2e8f0] italic font-bold hover:text-shadow-purple-500 m-1">Logout</Link>
            </div>
        </header>
    )
};

export default Header;