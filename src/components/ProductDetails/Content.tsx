import { styled } from "styled-components";
import { productType } from "../../Types";
import { GoGitCompare } from "react-icons/go"
import { AiOutlineHeart, AiOutlineTwitter, AiFillStar } from "react-icons/ai"
import { FaFacebookF, FaCcStripe, FaCcPaypal, FaCcVisa } from "react-icons/fa"
import { BiLogoLinkedin } from "react-icons/bi"
import { BsTelegram } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Content({ singleProduct }: { singleProduct: productType | null }) {
    return (
        <Wrapper className="content">
            <h2 className="name">{singleProduct?.name}</h2>
            <div className="rate">
                <ul className="">
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                    <li><AiFillStar /></li>
                </ul>
                <p>(2 customer reviews)</p>
            </div>
            <br />
            <p className="serial"><span>Serial:</span> {singleProduct?.serial}</p>
            <h2 className="price">$ {singleProduct?.price}.00</h2>
            <ul>
                <li><p>color:</p> <ul>
                    {singleProduct?.colors.map((color, index) => {
                        return <button key={index} className="color" style={{ backgroundColor: `${color}` }}>
                            <div>{color}</div>
                        </button>
                    })}
                </ul></li>
                <li><p>brand:</p> <span>{singleProduct?.brand}</span></li>
                <li><p>model:</p> <span>{singleProduct?.model}</span></li>
                <li><p>releaseYear:</p> <span>{singleProduct?.releaseYear.toString().split("T")[0]}</span></li>
            </ul>
            <div className="btns">
                <div className="control">
                    <button>-</button>
                    <input type="number" placeholder="1" />
                    <button>+</button>
                </div>
                <button className="addToCart">
                    Add To Cart
                </button>
                <button className="buyNow">
                    Buy Now
                </button>
            </div>
            <br />
            <hr />
            <div className="bar">
                <div className="btns">
                    <button className="compare"><GoGitCompare /> Compare</button>
                    <button className="wishlist"><AiOutlineHeart /> Add to wishlist</button>
                </div>
                <div className="share">
                    <p>Share: </p>
                    <ul>
                        <li><Link to={`/`}><FaFacebookF /></Link></li>
                        <li><Link to={`/`}><AiOutlineTwitter /></Link></li>
                        <li><Link to={`/`}><BiLogoLinkedin /></Link></li>
                        <li><Link to={`/`}><BsTelegram /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="payment">
                <p>Payment Methods: </p>
                <ul>
                    <li style={{ color: '#6772E4' }}><FaCcStripe /></li>
                    <li style={{ color: '#1B3E92' }}><FaCcPaypal /></li>
                    <li style={{ color: '#0842A6' }}><FaCcVisa /></li>
                </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: calc(50% - 10px);

    .name,.price {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 20px;
    }

    .rate {
        display: flex;
        align-items: center;
        gap: 10px;
        ul {
            align-items: center;
            display: flex;
            gap: 1px;
            li {
                color: #d2b300;
                align-items: center;
                display: flex;
            }
            
        }
        p {
                display: block;
            }
    }

    .serial {
        font-weight: 300;
        margin-bottom: 20px;
        span {
            font-weight: 400;
        }
    }

    .price {
        color: var(--main-blue);
    }

    > ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 20px;
            li {
                display: flex;
                p {
                    width: 120px;
                }
                ul {
                    display: flex;
                    gap: 10px;
                    .color {
                        position: relative;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            &:hover  div {
                                opacity: 1;
                                visibility: visible;
                            }
                        > div {
                            position: absolute;
                            top: -35px;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: var(--black);
                            color: var(--white);
                            padding: 7px;
                            font-size: 14px;
                            border-radius: 10px;
                            opacity: 0;
                            visibility: hidden;
                            transition: 0.5s;
                        }
                    }
                }
            }
        
    }

    > .btns {
        display: flex;
        align-items: center;
        gap: 10px;

        .control {
            display: flex;
            align-items: center;
            width: calc(15% - 20px / 3);
            border: 1px solid #d0cece;
            border-radius: 5px;
            button {
                background-color: var(--white);
                transition: 0.3s;
                &:hover {
                    background-color: var(--main-blue);
                    color: var(--white);
                }
            }
            input {
                width: 30px;
                border: none;
                outline: none;
                border: 1px solid #d0cece;
                font-size: 14px;
                text-align: center;
            }
            button, input {
                width: calc(100%/3);
                padding: 12px 0;
                
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            input[type=number] {
                -moz-appearance: textfield;
            }

            @media(max-width: 992px) {
                width: calc(20% - 20px / 3);
            }
            @media(max-width: 768px) {
                width: calc(15% - 20px / 3);
            }
            @media(max-width: 576px) {
                width: calc(25% - 20px / 3);
            }

        }

        > button {
            width: calc(85% / 2 - 20px / 3);
            padding: 12px;
            border-radius: 7px;
            &:hover {
                opacity: 0.7;
            }
            @media(max-width: 992px) {
                width: calc(80% / 2 - 20px / 3);
            }
            @media(max-width: 768px) {
                width: calc(85% / 2 - 20px / 3);
            }
            @media(max-width: 576px) {
                width: calc(75% / 2 - 20px / 3);
            }
        }

        .addToCart {
            background-color: var(--main-blue);
            color: var(--white);
        }
        .buyNow {
            background-color: green;
            color: var(--white);
        }
    }

    .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 20px 0;
        gap: 20px;
        .btns {
            display: flex;
            align-items: center;
            gap: 10px;
            button {
                display: flex;
                align-items: center;
                gap: 5px;
                font-weight: 500;
                font-size: 15px;
                &:hover {
                    opacity: 0.7;
                }
            }
            @media(max-width: 992px) {
                width: 100%;
}

        }
        .share {
            display: flex;
            align-items: center;
            gap: 10px;

            p {
                font-size: 15px;
            }
            ul {
                display: flex;
                align-items: center;
                gap: 10px;
                li {
                    a{
                        &:hover {
                            opacity: .7;
                        }
                    }
                }
            }
            @media(max-width: 992px) {
                width: 100%;
}
        }
    }

    .payment {
            display: flex;
            align-items: center;
            gap: 15px;

            p {
                font-size: 15px;
            }
            ul {
                display: flex;
                align-items: center;
                gap: 10px;
                li {
                    font-size: 30px;
                    display: flex;
                    align-items: center;
                }
            }
    }
    
    @media(max-width: 768px) {
        width: calc(100%);
    }

`