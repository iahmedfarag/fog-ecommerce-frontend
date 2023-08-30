import { styled } from 'styled-components'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { BsGrid } from "react-icons/bs"
import NextPrevProductTemplate from './NextPrevProductTemplate'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from "../../redux/hooks";

export default function NextPrevProducts() {
    const [prevProductHovered, setPrevProductHovered] = useState(false);
    const [nextProductHovered, setNextProductHovered] = useState(false);
    const { singleProduct } = useAppSelector((state) => state.products)

    const navigate = useNavigate()

    const prevProduct = () => {
        navigate(`/${singleProduct.prevProduct?.mainCategory.slug}/${singleProduct.prevProduct?.category.slug}/${singleProduct.prevProduct?.subCategory.slug}/${singleProduct.prevProduct?.slug}/${singleProduct.prevProduct?._id}`)
    }

    const nextProduct = () => {
        navigate(`/${singleProduct.nextProduct?.mainCategory.slug}/${singleProduct.nextProduct?.category.slug}/${singleProduct.nextProduct?.subCategory.slug}/${singleProduct.nextProduct?.slug}/${singleProduct.nextProduct?._id}`)
    }

    return (
        <Wrapper className="next-prev">
            <div className="prev" onMouseOver={() => setPrevProductHovered(true)} onMouseLeave={() => setPrevProductHovered(false)}>
                <button className="flex" onClick={prevProduct} disabled={singleProduct.prevProduct ? false : true}><MdOutlineArrowBackIos /></button>
                {singleProduct.prevProduct && <NextPrevProductTemplate prevProductHovered={prevProductHovered} product={singleProduct.prevProduct} />}
            </div>
            <div className="products">
                <Link to={`/`} className='productsLink'><button className="flex"><BsGrid /></button></Link>
                <p className="text">Back to products</p>
            </div>
            <div className="next" onMouseOver={() => setNextProductHovered(true)} onMouseLeave={() => setNextProductHovered(false)}>
                <button className="flex" onClick={nextProduct} disabled={singleProduct.nextProduct ? false : true}><MdOutlineArrowForwardIos /></button>
                {singleProduct.nextProduct && <NextPrevProductTemplate nextProductHovered={nextProductHovered} product={singleProduct.nextProduct} />}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        display: flex;
        align-items: center;
        gap: 7px;


        a,button {
            display: block;
            font-size: 14px;
            &:hover {
                opacity: 0.7;
            }
        }
        .products {
            a {
                &:hover ~ .text {
                    opacity: 1;
                visibility: visible;
                }
            }
            .text {
                position: absolute;
                top: -5px;
                right: 0px;
                background-color: var(--black);
                color: var(--white);
                font-size: 12px;
                text-align: center;
                padding: 7px 10px;
                border-radius: 10px;

                opacity: 0;
                visibility: hidden;
                transition: 0.5s;
            }
        }

        @media(max-width: 768px) {
        display: none;
    }
`