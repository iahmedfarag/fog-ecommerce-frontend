import { styled } from "styled-components"
import ProductCardImage from "./ProductCardImage"
import Rate from "./Rate"
import Details from "./Details"
import Bar from "./Bar"
import Status from "./Status"
import { AiOutlineCheck } from "react-icons/ai"
import AddToCartBtn from "./AddToCartBtn"
export default function ProductCard({ pHot, pNew }) {
    // console.log(props)
    return (
        <Wrapper>
            <ProductCardImage />
            <h4>Apple MacBook Pro 16 M1</h4>
            <p>Apple MacBook</p>
            <Rate />
            <div className="ava">
                <div className="flex"><AiOutlineCheck /></div>
                <p>In stock</p>
            </div>
            <div className="info">
                <p className="price">$ 2.499.00</p>
                <div className="colors flex">
                    <div className="color">
                        <button></button>
                        <p>grey</p>
                    </div>
                    <div className="color silver">
                        <button></button>
                        <p>silver</p>
                    </div>
                </div>
            </div>
            <AddToCartBtn />
            <div className="code">
                <p>SKU: <span>11234</span></p>
            </div>

            <Details />
            <Status pHot={pHot} pNew={pNew} />
            <Bar />

        </Wrapper>
    )
}


const Wrapper = styled.article`
    position: relative;
    width: calc(100% / 5 - (40px / 5));
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all .5s ease;
    background-color: var(--white);
    padding: 10px;
    overflow: hidden;
    &:hover {
        transform: scale(1.01);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;   
        overflow: visible;
        
        .details {
            opacity: 1;
            visibility: visible;
        }
        .bar {
            right: 15px;
        }
    }

    h4 {
        margin-bottom: 5px;
        font-weight: 500;
    }

    > p {
        color: grey;
        margin-bottom: 10px;
    }

    .ava {
        margin-top: 5px;
        display: flex;
        gap: 5px;
        div {
            color: var(--main-blue);
            font-weight: bold;
            font-size: 20px;
        }
        p {
            font-size: 14px;
            font-weight: 500
        }
    }

    .info {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        .price {
            color: var(--main-blue);
        }
        .colors {
            gap: 10px;
            .color {
                position: relative;
                button {
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background-color: grey;
                    &:hover ~ p {
                        opacity:1
                    }
                }
                &.silver {
                    button {
                        background-color: silver;
                    }
                }
                p {
                    position: absolute;
                    top:-30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: var(--black);
                    color: var(--white);
                    padding: 6px 10px;
                    font-size: 12px;
                    opacity: 0;
                }
            }
        }
    }

    .code {
        margin-top: 10px;
        p {
            font-size: 14px;
            span {
                color: grey;
            }
        }
    }

    @media(max-width: 1200px) {
        width: calc(100% / 4 - (40px / 4));

    }
    @media(max-width: 992px) {
        width: calc(100% / 3 - (20px / 3));

    }
    @media(max-width: 768px) {
        width: calc(100% / 2 - (10px / 2));
    }

    @media(max-width: 576px) {
        width: calc(100%);

    }

`