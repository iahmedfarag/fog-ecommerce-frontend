import { styled } from "styled-components"
import { productType } from "../../Types"
import { Link } from "react-router-dom"


type StatusTypes = {
    product: productType
}

export default function ProductCardImage({ product }: StatusTypes) {
    return (
        <Wrapper>
            <Link to={`/${product.mainCategory.slug}/${product.category.slug}/${product.subCategory.slug}/${product.slug}/${product._id}`} draggable="false" className="imgWrapper">
                <img src={product.mainImage.secure_url} draggable="false" alt="product-image" />
            </Link>
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