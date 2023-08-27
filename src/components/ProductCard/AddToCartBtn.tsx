import { styled } from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function AddToCartBtn() {
    return (
        <Wrapper>
            <p className='text'>Add To Cart</p>
            <p className='icon flex'><AiOutlineShoppingCart /></p>
        </Wrapper>
    )
}

const Wrapper = styled.button`
        position: relative;
        margin-top: 10px;
        background-color: var(--main-blue);
        width: 100%;
        padding: 20px;
        color: var(--white);
        font-weight: bold;
        font-size: 1;
        border-radius: 10px;
        overflow: hidden;
        &:hover {
            opacity: .7;
        }
        p {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            transition: 0.2s;
        }
        .text {

        }
        .icon {
            top: 50px;
            font-size: 22px;
        }
        &:hover .icon{
            top: 50%;
        }
        &:hover .text{
            top: -50px;
        }
`