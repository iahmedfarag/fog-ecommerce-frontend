import { styled } from "styled-components"
import img from "../../assets/apple-macbook-pro-16-silver-1.jpg"


export default function ProductCardImage({ product }) {
    return (
        <Wrapper>
            <a href={`/${product.mainCategory.slug}/${product.subCategory.slug}/${product.slug}`} draggable="false" className="imgWrapper">
                <img src={product.mainImage.secure_url} draggable="false" alt="product-image" />
            </a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .imgWrapper {
        img {
            width: 100%;
        }
    }
`