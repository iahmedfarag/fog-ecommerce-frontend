import { styled } from "styled-components"
import { productType } from "../../Types"

type LineTypes = {
    pKey: string,
    pValue: string
}

const Line = ({ pKey, pValue }: LineTypes) => {
    return <div className="line flex">
        <p className="key">{pKey}: </p>
        <p className="value">{pValue}</p>
    </div>
}

// new Date(<your-date-object>.toDateString());

type DetailsTypes = {
    product: productType
}

export default function Details({ product }: DetailsTypes) {

    return (
        <Wrapper className="details">
            <div className="wrapper">
                <div className="list">
                    <Line pKey={"brand"} pValue={product.brand} />
                    <Line pKey={"model"} pValue={product.model} />
                    <Line pKey={"colors"} pValue={product.colors.toString()} />
                    <Line pKey={"release year"} pValue={product?.releaseYear?.split("T")[0]} />
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
    z-index: 55;
    .wrapper {
        position: absolute;
        top: 10px;
        left: -10px;
        width: calc(100% + 20px);
        background-color: var(--white);
        padding: 10px;
        padding-top: 0;
        height: 106px;
        z-index: 55;

        .list {
            position: relative;
            z-index: 55;
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