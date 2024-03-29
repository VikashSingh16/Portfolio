 import { NavBarJson } from "../Util/Utility";
const NavBar = () => {

    return (
        <div>
            <ul className="flex ">
                {NavBarJson.map((nav) => (
                    <li className="mr-4" key={nav.label}>{nav.label}</li>
                ))}
            
            </ul>
        </div>
    );
}

export default NavBar;