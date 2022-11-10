import React from "react"

import DropDown from "./DropDown";

const Header:React.FC = () => {
    return (
        <header className="flex justify-between text-left pb-1 border-b-2 border-purple-200">
            <div>
                <p className="text-5xl italic text-purple-100 text-shadow-purple-500 ">Home Page</p>
            </div>
            <div className="flex pt-1">
                <input type="text" placeholder="Search" className="input" />
                <DropDown/>
            </div>
        </header>
    )
};

export default Header;