import { PiUser } from "react-icons/pi"
import { GoGitCompare } from "react-icons/go"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"

export default function UserDetails() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="links flex">
            <div className="currency">
                <button className="flex" onClick={() => { setIsOpen(!isOpen) }}>
                    USD {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                <ul className={`${isOpen ? "flex active" : "flex"}`}>
                    <li><button>EGP</button></li>
                </ul>
            </div>
            <ul className="flex">
                <li>
                    <a href="/"> <div><PiUser /></div> </a>
                </li>
                <li>
                    <a href="/">
                        <div><GoGitCompare /></div>
                        <p>0</p>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <div><AiOutlineHeart /></div>
                        <p>0</p>
                    </a>
                </li>

            </ul>
            <div className="cart">
                <a href="/" className="flex">
                    <div>
                        <div className="flex"><AiOutlineShoppingCart /></div>
                        <p>0</p>
                    </div>
                    <p>$199,99,0</p>
                </a>
            </div>
        </div>
    )
}
