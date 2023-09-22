import styled from "styled-components"
import { Link } from "react-router-dom"
import { ImFileOpenoffice } from "react-icons/im"
import { FiDownload, FiUser } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { TbLogout } from "react-icons/tb"

const links = [
    {
        to: "/",
        name: "dashboard",
        icon: <ImFileOpenoffice />
    },
    {
        to: "/",
        name: "account-details",
        icon: <FiDownload />

    },
    {
        to: "/",
        name: "orders",
        icon: <FiUser />

    },
    {
        to: "/",
        name: "wishlist",
        icon: <AiOutlineHeart />

    },
    {
        to: "/",
        name: "logout",
        icon: <TbLogout />

    },
]
export default function Dashboard() {
    return (
        <Wrapper>
            <p className="welcome">Hello NAME (not NAME? <button>log out</button>)</p>
            <p className="intro">
                From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.Orders
            </p>
            <div className="cards">
                {
                    links.map(link => <Link to={`/`} className="card">
                        <div className="icon">{link.icon}</div>
                        <p>{link.name}</p>
                    </Link>)
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        color: var(--light-gray);
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: calc(75% - 20px);

    .welcome {
    }
    .intro {
        line-height: 1.7;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        a {
            width: calc((100% / 3) - (40px / 3));
            border: 1px solid var(--light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            padding: 30px;

            border-radius: 10px;
            .icon {
                font-size: 40px;
                transition: 0.2s;
            }
            p {
                font-size: 20px;
            }

            &:hover .icon {
                color: var(--main-blue);
            }
        }
    }

    @media(max-width: 1400px) {
        width: calc(70% - 20px);
    }
`