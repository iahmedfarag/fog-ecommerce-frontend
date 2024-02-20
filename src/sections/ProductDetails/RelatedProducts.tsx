import { styled } from "styled-components";

import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppSelector } from "../../redux/hooks";

export default function RelatedProducts() {
    const { bestProducts } = useAppSelector((state) => state.products);

    return (
        <Wrapper>
            <header>
                <h2>Related Products</h2>
            </header>
            <div className="products">
                {bestProducts.map((product) => {
                    return (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    padding: 50px 0;
    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        h2 {
            margin: 0;
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
                opacity: 0.8;
            }
        }
    }
    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`;
