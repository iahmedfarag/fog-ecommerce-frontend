import { styled } from "styled-components"
import img from "../../assets/apple-macbook-pro-16-silver-1.jpg"


export default function ProductCardImage() {
    return (
        <Wrapper>
            <div className="imgWrapper">
                <img src={img} alt="product-image" />
            </div>
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