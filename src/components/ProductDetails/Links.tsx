
import { styled } from 'styled-components'
import { productType } from '../../Types'
import { Link } from 'react-router-dom'

export default function Links({ singleProduct }: { singleProduct: productType | null }) {
    return (
        <Wrapper>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            /
            <li>
                <Link to={`/`}>{singleProduct?.mainCategory.name}</Link>
            </li>
            /
            <li>
                <Link to={`/`}>{singleProduct?.category.name}</Link>
            </li>
            /
            <li>
                <Link to={`/`}>{singleProduct?.subCategory.name}</Link>
            </li>
            /
            <li>
                <Link className="active" to={`/${singleProduct?.mainCategory.slug}/${singleProduct?.category.slug}/${singleProduct?.subCategory.slug}/${singleProduct?.slug}/${singleProduct?._id}`}>
                    {singleProduct?.name}</Link>
            </li>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
        display: flex;
        align-items: center;
        gap: 10px;
        li {
            padding: 10px 0;
            a {
                font-size: 15px;
                color: gray;
                &:hover {
                    opacity: .7;
                }
                &.active {
                    color: var(--black);
                }
            }
        }

        @media(max-width: 768px) {
            overflow-x: scroll;
            gap: 7px;
            li {
            white-space: nowrap; // 

            }
        }
    
`