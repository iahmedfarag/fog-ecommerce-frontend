import { styled } from "styled-components";
import { productType } from "../../Types";
import Content from "../../components/ProductDetails/Content";
import Images from "../../components/ProductDetails/Images";

export default function Product({ singleProduct }: { singleProduct: productType | null }) {
    return (
        <Wrapper className="product">
            <Images singleProduct={singleProduct} />
            <Content singleProduct={singleProduct} />

        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media(max-width: 992px) {
        gap: 0px;

}

`