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
                <div className="list">
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />
                    <Line pKey={"Brand"} pValue={"Apple"} />

                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    transition: all .5s ease;
    background-color: var(--white);
    position: relative;
    opacity: 0;
    visibility: hidden;

    /* padding: 10px; */
    .wrapper {
        position: absolute;
        top: 10px;
        left: -10px;
        width: calc(100% + 20px);
        background-color: var(--white);
        padding: 10px;
        padding-top: 0;
        height: 105px;
        overflow-y: scroll;
        .list {
            position: relative;
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
    }
    }


    
`