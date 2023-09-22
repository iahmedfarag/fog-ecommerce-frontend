import { Link } from "react-router-dom"
import styled from "styled-components"

const links = [
    {
        to: "/",
        name: "dashboard",
    },
    {
        to: "/",
        name: "account-details"
    },
    {
        to: "/",
        name: "orders"
    },
    {
        to: "/",
        name: "wishlist"
    },
    {
        to: "/",
        name: "logout"
    },
]
export default function MyAccountsSideBar() {
    return (
        <Wrapper>
            <h2>My Account</h2>
            <div className="sep"></div>
            <ul>
                {
                    links.map((link, index) => <li className={`${index === 0 && 'active'}`} ><Link to={`${link.to}`}>{link.name}</Link></li>)
                }
            </ul>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: calc(25% - 20px);
    h2 {
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid gray;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
            a {
                display: block;
                width: 100%;
            padding: 10px 5px;

                &:hover {
                    background-color: #e7e6e6;

                }
            }
            &.active {
                background-color: #e7e6e6;
            }
        }
    }

    @media(max-width: 1400px) {
        width: calc(30% - 20px);
    }
    @media(max-width: 1200px) {

    }
    @media(max-width: 992px) {

    }
    @media(max-width: 768px) {

    }
    @media(max-width: 576px) {

    }





`