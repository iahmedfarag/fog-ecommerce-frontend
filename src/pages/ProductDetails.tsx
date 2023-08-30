
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { getSingleProduct } from "../redux/productsSlice";
import LoadingErrorHandler from "../components/LoadingErrorHandler";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "styled-components";
import { Bar, Product, ProductReview, RelatedProducts } from "../sections/index.ts";


export default function ProductDetails() {
    const { isLoading, error, singleProduct } = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()
    const params = useParams();
    let productIndex



    console.log(productIndex, 'product index')

    useEffect(() => {
        dispatch(getSingleProduct(params.productId))
    }, [dispatch, params.productId])

    return (
        <LoadingErrorHandler isLoading={isLoading} error={error}>
            <Wrapper>
                <div className="container">
                    <Bar singleProduct={singleProduct.current} />
                    <Product singleProduct={singleProduct.current} />
                    <ProductReview />
                    <RelatedProducts />
                </div>
            </Wrapper>
        </LoadingErrorHandler>

    )
}

const Wrapper = styled.section`
    background-color: var(--white);
`