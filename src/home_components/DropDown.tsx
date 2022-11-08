import React from "react";
import { Link } from "react-router-dom";
const DropDown:React.FC = () => {
    return (
        <section>
            <Link to="/login" className="text-[#e2e8f0] italic font-bold hover:text-shadow-purple-500 m-1">Logout</Link>
        </section>
    )
};

export default DropDown;