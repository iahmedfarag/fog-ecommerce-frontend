import { Link } from "react-router-dom"
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"
import { UserWrapper } from "./CommonWrappers"

export default function Login() {
    return (
        <UserWrapper>
            <div className="container">

                <form action="">
                    <h2>Login</h2>
                    <div className="row">
                        <label htmlFor="username">Username or email address <AiFillStar /></label>
                        <input type="text" id="username" />
                    </div>
                    <div className="row">
                        <label htmlFor="password">Password <AiFillStar /></label>
                        <input type="text" id="password" />
                    </div>
                    <button>Login</button>
                    <Footer>
                        <div className="left">
                            <input id="check" type="checkbox" />
                            <label htmlFor="check">remember me</label>
                        </div>
                        <Link to={`/`}>lost your password?</Link>
                    </Footer>
                </form>

                <div className="sep"></div>

                <div className="info">
                    <h2>Register</h2>
                    <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                    </p>
                    <Link to={`/register`}>Register</Link>
                </div>

            </div>
        </UserWrapper>
    )
}


const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .left {
        display: flex;
        gap: 7px;
    }
    a {
        color: var(--main-blue);
        &:hover {
            opacity: 0.8;
        }
    }

`