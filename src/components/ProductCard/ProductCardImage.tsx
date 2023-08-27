import { styled } from "styled-components"
import { ProductTypes } from "./ProductCard"

type StatusTypes = {
    product: ProductTypes
}

export default function ProductCardImage({ product }: StatusTypes) {
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