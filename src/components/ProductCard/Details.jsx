import { styled } from "styled-components"

const Line = ({ pKey, pValue }) => {
    return <div className="line flex">
        <p className="key">{pKey}: </p>
        <p className="value">{pValue}</p>
    </div>
}

export default function Details() {
    return (
        <Wrapper className="details">
            <div className="wrapper">
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
                <Line pKey={"Brand"} pValue={"Apple"} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    transition: all .5s ease;
    position: absolute;
    background-color: var(--white);
    width: 100%;
    left: 0;
    top: calc(100% - 10px);
    opacity: 0;
    visibility: hidden;

    padding: 10px;

    .line {
        gap: 6px;
        margin: 5px 0;
        p {
            font-size: 14px;
        }

        .value {   
            color: grey;
        }
    }
`