import { useLocation } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";  
import Topbar from "./scenes/global/Topbar";   

const Main = () => {
    const location = useLocation();
    const noSidebarHeader = location.pathname === '/login';

    return (
        <div>
            {!noSidebarHeader && <Sidebar />}
            {!noSidebarHeader && <Topbar />}
        </div>
    );
};

export default Main;
