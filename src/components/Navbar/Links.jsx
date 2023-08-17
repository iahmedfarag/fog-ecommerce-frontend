import { RxHamburgerMenu } from "react-icons/rx"
import { nanoid } from "nanoid"
const navLinks = [
    {
        id: nanoid(5),
        title: "All Categories",
        icon: <RxHamburgerMenu />,
        to: "/"
    },
    {
        id: nanoid(5),
        title: "Promotions",
        to: "/"
    },
    {
        id: nanoid(5),
        title: "Stores",
        to: "/"
    },
    {
        id: nanoid(5),
        title: "Our Contacts",
        to: "/"
    },
    {
        id: nanoid(5),
        title: "Delivery & Return",
        to: "/"
    },
    {
        id: nanoid(5),
        title: "Outlet",
        to: "/"
    },
]

export default function Links() {
    return (
        <ul className="navLinks flex">
            {
                navLinks.map((link, index) => {
                    const { id, title, icon, to } = link
                    return <li key={id} className={`${index === 0 && "active"}`}>
                        <a href={to} className="flex">
                            {
                                icon ?
                                    <><div className="flex">{icon}</div>
                                        <h4>{title}</h4></>
                                    : <h4>{title}</h4>
                            }
                        </a>
                    </li>
                })
            }
        </ul>
    )
}
