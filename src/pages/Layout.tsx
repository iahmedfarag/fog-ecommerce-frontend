import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../sections";
import Sidebar from "../components/Sidebar/Sidebar";


export default function Layout() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}
