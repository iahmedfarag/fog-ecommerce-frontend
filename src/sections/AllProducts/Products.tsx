import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppSelector } from "../../redux/hooks";
import LoadingErrorHandler from "../../components/LoadingErrorHandler";


export default function Products() {
    const { products, isLoading, error, productsPerRow } = useAppSelector((state) => state.products)

    return (
        <LoadingErrorHandler isLoading={isLoading} error={error} loadingHeight='600px'>
            <Wrapper className="products" >
                {
                    products.length > 0 ? products.map((product) => <ProductCard product={product} key={product._id} width={productsPerRow} gap={15} />) :
                        <h3>no products found</h3>
                }
            </Wrapper >
        </LoadingErrorHandler >
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    .product {
        width: calc(100% / 4 - (45px / 4));
    }
    @media(max-width: 1200px) {

    }
    @media(max-width: 992px) {
        .product {
            width: calc(100% / 3 - (30px / 3)) !important;
        }
    }
    @media(max-width: 768px) {
        .product {
            width: calc(100% / 2 - (15px / 2)) !important;
        }
    }
    @media(max-width: 576px) {
        .product {
            width: calc(100% ) !important;
        }
    }

`