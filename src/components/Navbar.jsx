import { useState } from "react";

const Navbar = () => {
    const [navbar,setNavbar] = useState('test')


    return ( 
        <div className="bg-nav">
            <div className="logo">
                Logo
            </div>
            <div className="nav">
                {navbar}
            </div>
        </div>
     );
}
 
export default Navbar;