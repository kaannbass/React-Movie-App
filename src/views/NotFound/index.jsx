import { Outlet } from "react-router";

const NotFound = () => {
    return (
        <div className="">
            <h1>NotFound</h1>
            <Outlet></Outlet>
        </div>
    );
}

export default NotFound;