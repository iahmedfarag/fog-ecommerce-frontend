import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"


export default function Logo() {
    return (
        <div className="logo">
            <Link to={`/`}>
                <img src={logo} alt="logo" />
            </Link>
        </div>
    )
}
