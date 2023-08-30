
import { styled } from 'styled-components'
import { productType } from '../../Types'

type NextPrevProductTemplatePropsTypes = {
    prevProductHovered?: boolean,
    nextProductHovered?: boolean,
    product: productType | null
}

export default function NextPrevProductTemplate({ prevProductHovered, nextProductHovered, product }: NextPrevProductTemplatePropsTypes) {

    return (
        <Wrapper className={`product ${prevProductHovered ? 'active' : nextProductHovered ? 'active' : ''}`}>
            <div className="img"><img src={product?.mainImage.secure_url} alt="" /></div>
            <div className="content">
                <p className="title">{product?.name}</p>
                <p className="price">${product?.price}.00</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
                background-color: var(--white);
                position: absolute;
                top: 60px;
                right: 0;
                width: 250px;
                height: 100px;
                display: flex;
                gap: 10px;
                align-items: center;
                border-radius: 10px;
                .img {
                    width: 100px;
                    img {
                        width: 100%;
                        object-fit: cover;
                    }
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    .title {

                    }
                    .price {
                        font-size: 15px;
                        color: var(--main-blue);
                        
                    }
                }

        opacity: 0;
        visibility: hidden;
        transition: 0.5s;

        &::before {
            content: "";
            position: absolute;
            top: -10px;
            right: 0;
            width: 250px;
            height: 10px;
        }
        &.active {
            top: 50px;
            opacity: 1;
            visibility: visible;
        }
        
`