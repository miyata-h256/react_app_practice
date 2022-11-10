import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/setting.png";
const DropDown:React.FC = () => {
    return (
        <div className="group pl-5">
            <button type="button" className="group-hover:shadow-purple-500">
                <img src={Icon} alt="setting" className=""/>
            </button>
            <div className="invisible group-hover:visible">
                <Link to="/login" className="text-[#e2e8f0] italic font-bold hover:text-shadow-purple-500 m-1">Logout</Link>
            </div>
        </div>
    )
};

export default DropDown;