import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useAppSelector } from "../../redux/hooks"


export default function Bar() {
    const { count } = useAppSelector((state) => state.products)
    // * TODO EDIT SHOWING PRODUCTS NUBMER
    return (
        <Wrapper>
            <ul className="links">
                <li><Link to={`/`}>Home</Link></li> /
                <li><Link to={`/all-products`} className="active">All Products</Link></li>
            </ul>
            <p>showing {count} result</p>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
padding: 10px 0;
        ul {
            display: flex;
        align-items: center;
        gap: 10px;
        li {
            padding: 10px 0;
            a {
                font-size: 15px;
                color: gray;
                &:hover {
                    opacity: .7;
                }
                &.active {
                    color: var(--black);
                }
            }
        }

        @media(max-width: 768px) {
            overflow-x: scroll;
            gap: 7px;
            li {
            white-space: nowrap; // 

            }
        }
        }

        p {
            font-size: 15px;
        }

`