import { styled } from "styled-components"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import ProductCard from "../components/ProductCard/ProductCard"
import { useAppSelector } from "../redux/hooks"
import LoadingErrorHandler from "../components/LoadingErrorHandler"
import { Link } from "react-router-dom"

export default function SpecialCategory() {
    const { products, isLoading, error } = useAppSelector((state) => state.products)


    const bestProducts = products.filter((item) => item.subCategory.slug == "ultrabook")


    return (
        <LoadingErrorHandler isLoading={isLoading} error={error}>

            <Wrapper>
                <div className="container">
                    <header>
                        <h2>gaming pcs</h2>
                        <Link to={`/`} className="flex">
                            <button className="flex">More Products <MdOutlineArrowForwardIos /></button>
                        </Link>
                    </header>
                    <div className="products">
                        {
                            bestProducts.map((product) => {
                                return <ProductCard key={product._id} product={product} />
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </LoadingErrorHandler>

    )
}

const Wrapper = styled.section`
            padding: 50px 0;
            .container {
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
            .products {
                display:flex;
            flex-wrap: wrap;
            gap:10px;
        }
    }

            `