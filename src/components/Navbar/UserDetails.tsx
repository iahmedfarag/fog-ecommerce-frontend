import { PiUser } from "react-icons/pi"
import { GoGitCompare } from "react-icons/go"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
// import { useState } from "react"
import { Link } from "react-router-dom"

export default function UserDetails() {
    // const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="links flex">
            <ul className="flex">
                <li>
                    <Link to={`/register`}> <div><PiUser /></div> </Link>
                </li>
                <li>
                    <Link to={`/`}>
                        <div><GoGitCompare /></div>
                        <p>0</p>
                    </Link>
                </li>
                <li>
                    <Link to={`/`}>
                        <div><AiOutlineHeart /></div>
                        <p>0</p>
                    </Link>
                </li>

            </ul>
            <div className="cart">
                <Link to={`/`} className="flex">
                    <div>
                        <div className="flex"><AiOutlineShoppingCart /></div>
                        <p>0</p>
                    </div>
                    <p>$199,99,0</p>
                </Link>
            </div>
        </div>
    )
}
