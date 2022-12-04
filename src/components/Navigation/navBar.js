import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <NavLink to ="/novels">
                <button>
                    Novels
                </button>
            </NavLink>

            <NavLink to ="/characters">
                <button>
                    Characters
                </button>
            </NavLink>

        </>
    )
}