import { styled } from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import ProductCard from "../components/ProductCard/ProductCard"
import NewProductsPoster from "../components/NewProductsPoster"
import { useAppSelector } from "../redux/hooks"


export default function NewProducts() {
    const { products } = useAppSelector((state) => state.products)
    const newProducts = products.filter((item) => item.new == true && item.bestOffer == false)
    const newProductsFilter = newProducts.filter((item, index) => item.new == true && item.bestOffer == false && index < 4)


    return (
        <Wrapper>
            <div className="container">
                <NewProductsPoster />
                <div className="products">
                    <header>
                        <h2>New Products</h2>
                        <a href="/" className="flex">
                            <button className="flex">More Products <MdOutlineArrowForwardIos /></button>
                        </a>
                    </header>
                    <div className="productsWrapper">
                        {
                            newProductsFilter.map((product) => {
                                return <ProductCard key={product._id} product={product} />
                            })
                        }
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 50px 0;
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .products {
            width: calc(75% - 10px);
            header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 25px;

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
            .productsWrapper {
                    display:flex;
                    flex-wrap: wrap;
                    gap:10px;
                    > article {
                        width: calc(100% / 4 - (40px / 4));

                        @media(max-width: 1200px) {
                            width: calc(100% / 3 - (20px / 3));

                        }
                        @media(max-width: 992px) {
                            width: calc(100% / 3 - (20px / 3));

                        }
                        @media(max-width: 768px) {
                            width: calc(100% / 2 - (10px / 2));
                        }

                        @media(max-width: 576px) {
                            width: calc(100%);
                        }
                    }
                   
                        }
                    }
        }

        @media(max-width: 992px) {
                            .container {
                                .products {
                                    width: 100%;
                                }
                            }

                        }
`