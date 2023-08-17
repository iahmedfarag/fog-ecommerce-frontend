import logo from "../../assets/logo.png"


export default function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}
