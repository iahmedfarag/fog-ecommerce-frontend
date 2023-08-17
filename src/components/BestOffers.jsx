import { styled } from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import ProductCard from "./ProductCard/ProductCard"
export default function BestOffers() {
    return (
        <Wrapper>
            <div className="container">
                <header>
                    <h2>The Best Offfers</h2>
                    <a href="/" className="flex">
                        <button className="flex">More Products <MdOutlineArrowForwardIos /></button>
                    </a>
                </header>
                <div className="products">
                    <ProductCard />
                    <ProductCard pHot={true} pNew={true} />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px 0;
    .container {
        header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            h2 {

            }
            a {
                color: var(--main-blue);
                background-color: var(--light-blue);
                padding: 12px 20px;
                border-radius: 25px;
                font-size: 18px;
                button {
                    color: var(--main-blue);
                    background-color: var(--light-blue);
                    gap: 2px;
                    svg {
                        font-size: 12px;
                    }
                }
                &:hover {
                    opacity: .8;
                }
            }
        }
       .products {
            display:flex;
            flex-wrap: wrap;
            gap:10px;
        }
    }
`