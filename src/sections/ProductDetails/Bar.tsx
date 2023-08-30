import { styled } from "styled-components"
import { productType } from "../../Types"
import Links from "../../components/ProductDetails/Links"
import NextPrevProducts from "../../components/ProductDetails/NextPrevProducts"

export default function ProductDetailsBar({ singleProduct }: { singleProduct: productType | null }) {
    // ! TODO urls - after making products/shop page
    return (
        <Wrapper>
            <Links singleProduct={singleProduct} />
            {/*  */}
            <NextPrevProducts />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: relative;
`