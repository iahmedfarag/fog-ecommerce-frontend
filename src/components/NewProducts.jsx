import { styled } from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import ProductCard from "./ProductCard/ProductCard"
import { useSelector } from "react-redux"
export default function NewProducts() {
    const { products } = useSelector((state) => state.products)
    const newProducts = products.filter((item) => item.new == true && item.bestOffer == false)
    console.log(newProducts)
    return (
        <Wrapper>
            <div className="container">
                <header>
                    <h2>New Products</h2>
                    <a href="/" className="flex">
                        <button className="flex">More Products <MdOutlineArrowForwardIos /></button>
                    </a>
                </header>
                <div className="products">
                    {
                        newProducts.map((product) => {
                            return <ProductCard key={product._id} product={product} />
                        })
                    }
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