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
            <div className="sep"></div>
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
            <Line pKey={"Brand"} pValue={"Apple"} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: none;
    transition: all .5s ease;
    
    .sep {
        width: 100%;
        height: 1px;
        background-color: grey;
        margin: 10px 0;
    }
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