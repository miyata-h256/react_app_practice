import React from "react"
import Icon from "../img/setting.png";

const Header:React.FC = () => {
    return (
        <header className="flex justify-between text-left pb-1 border-b-2 border-purple-200">
            <div>
                <p className="text-5xl italic text-purple-100 text-shadow-purple-500 ">Home Page</p>
            </div>
            <div className="flex m-2">
                <input type="text" placeholder="Search" className="input m-1" />
                <div id="heading">
                <button type="button"  data-bs-toggle="collapse" className="
                                                                           my-2
                                                                           transition
                                                                           ease-in-out
                                                                           hover:delay-150
                                                                           hover:scale-90
                                                                           hover:translate-1"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <img src={Icon} alt="setting" className=" "/>
                </button>
                </div>
            </div>
        </header>
    )
};

export default Header;