import { styled } from "styled-components"
import img from "../../assets/logitech-aurora-headset.jpg"
import Countdown from 'react-countdown';
import CountDownRender from "./CountDown";


export default function MainPoster() {

    return (
        <Wrapper>
            <div className="imgWrapper">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h2>Aurora Headset</h2>

                <Countdown date={Date.now() + 1000002009} renderer={CountDownRender} />

                <button className="main-btn">Buy Now</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    width: calc(100%);
    height: fit-content;
    position: relative;
    cursor: pointer;
    &:hover img {
    transform: scale(1.09);
    }
    .imgWrapper {
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 260px;
        border-radius: 10px;

        img {
            border-radius: 10px;
            width: 100%;
            height: 260px;
            transition: all .5s ease;
            object-fit: cover;
        }
    }
    
    .content {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 15px;
        h2 {
            font-size: 26px;
            color: var(--white);
        }
    }
    @media(max-width: 992px) {

}

`