import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/setting.png";
const DropDown:React.FC = () => {
    return (
        <div id="dropdown" className="group items-center">
            <button type="button" className="group-hover:shadow-purple-500">
                <img src={Icon} alt="setting" className=""/>
            </button>
            <div className="relative invisible group-hover:visible">
                <ul className="border-2 border-purple-200">
                    <li><Link to="/login" className="text-[#e2e8f0] italic font-bold hover:text-shadow-purple-500 ">Logout</Link></li>
                </ul>            
            </div>
        </div>
    )
};

export default DropDown;