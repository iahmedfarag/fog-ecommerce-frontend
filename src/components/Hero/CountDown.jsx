import { styled } from "styled-components"


export default function CountDown({ completed, formatted }) {
    const { days, hours, minutes, seconds } = formatted

    if (completed) {
        return <>
            <h2>countdown finished</h2>
        </>
    }
    return <Wrapper className="countDown">
        <div className="box">
            <h3>{days}</h3>
            <p>Days</p>
        </div>
        <div className="box">
            <h3>{hours}</h3>
            <p>Hr</p>
        </div>
        <div className="box">
            <h3>{minutes}</h3>
            <p>Min</p>
        </div>
        <div className="box">
            <h3>{seconds}</h3>
            <p>Sc</p>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`

            display: flex;
            gap: 10px;
            .box {
                background-color: var(--white);
                width: 55px;
                padding: 8px 0;
                border-radius: 10px;
                text-align: center;
                h3 {
                    color: var(--black-3);
                    font-weight: 400;
                }
                p {
                    font-size: 13px;
                    color: grey;
                }
            }
        
`