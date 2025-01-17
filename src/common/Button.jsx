import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function Button ({ url, label }){
    return(
        <Link 
            to={url}
            className="btn" 
            // ref={btnRef}
        >
            <span className="btn-text">{label}</span> 
            <span className="btn-icon"><IoIosArrowForward /></span>
        </Link>
    )
}