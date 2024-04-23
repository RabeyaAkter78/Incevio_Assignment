import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/Navbar/NavBar";
import SecondNav from "../../Pages/Shared/SecondNav/SecondNav";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SecondNav></SecondNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;