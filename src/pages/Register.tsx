import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import { UserWrapper } from "./CommonWrappers"


export default function Register() {
    return (
        <UserWrapper>
            <div className="container">

                <form action="">
                    <h2>Register</h2>
                    <div className="row">
                        <label htmlFor="username">Username <AiFillStar /></label>
                        <input type="text" id="username" />
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email address <AiFillStar /></label>
                        <input type="text" id="email" />
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password <AiFillStar /></label>
                        <input type="text" id="password" />
                    </div>
                    <button>Register</button>
                </form>

                <div className="sep"></div>

                <div className="info">
                    <h2>Login</h2>
                    <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                    </p>
                    <Link to={`/login`}>Login</Link>
                </div>

            </div>
        </UserWrapper>
    )
}

