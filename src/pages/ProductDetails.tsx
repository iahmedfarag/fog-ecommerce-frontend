import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { clearSeachedProducts } from "../redux/products/productsSlice.ts";
import { getSingleProduct } from "../redux/products/productsFetchFunctions.ts";
import LoadingErrorHandler from "../components/LoadingErrorHandler";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { styled } from "styled-components";
import { Bar, Product, RelatedProducts } from "../sections/index.ts";

export default function ProductDetails() {
    const { isLoading, error, singleProduct } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(getSingleProduct(params.productId));
    }, [dispatch, params.productId]);

    useEffect(() => {
        dispatch(clearSeachedProducts());
    }, [dispatch, params.productId]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [singleProduct]);

    return (
        <LoadingErrorHandler
            isLoading={isLoading}
            error={error}
            loadingHeight={"70vh"}>
            <Wrapper>
                <div className="container">
                    <Bar singleProduct={singleProduct.current} />
                    <Product singleProduct={singleProduct.current} />
                    {/* <ProductReview /> */}
                    <RelatedProducts />
                </div>
            </Wrapper>
        </LoadingErrorHandler>
    );
}

const Wrapper = styled.section`
    background-color: var(--white);
`;
