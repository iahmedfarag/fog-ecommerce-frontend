import React from 'react'
import image from "../assets/new-product-poster.jpg"
import { styled } from 'styled-components'
export default function NewProductsPoster() {
    return (
        <Wrapper>
            <div className="imgWrapper">
                <img src={image} alt="new-products-poster" />
            </div>
            <div className="content">
                <h3>AT A GOOD PRICE
                </h3>
                <p>Nothing Phone 1
                </p>
                <button className="main-btn">Buy Now</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
align-self: flex-start;
    height: 550px;
    width: calc(25% - 10px);
    position: relative;
    cursor: pointer;
    /* background-color: red; */
    &:hover img {
        transform: scale(1.09);
    }
    .imgWrapper {
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        img {
            border-radius: 10px;
            width: 100%;
            object-fit: cover;
            height: 100%;
            transition: all .5s ease;
        }
    }

    .content {
        position: absolute;
        left: 50%;
        top: 100px;
        transform: translate(-50%,-50%);
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        h3 {
            color: #999;
            font-size: 13px;
            font-weight: 700px;
        }
        p {
            color: #e4e4e4;
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 5px;
        }
        button {
            background-color: var(--main-blue);
            color: var(--white);
            font-size: 13px;
        }
    }
    @media(max-width: 992px) {
       display: none;

    }

`
