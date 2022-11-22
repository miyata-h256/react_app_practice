import React from "react"

import DropDown from "./DropDown";

const Header:React.FC = () => {
    return (
        <header className="flex justify-between text-left  border-b-2 border-purple-200">
                <p className="text-5xl italic text-purple-100 text-shadow-purple-500 ">Home Page</p>
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Search" className="input" />
                <DropDown/>
            </div>
        </header>
    )
};

export default Header;