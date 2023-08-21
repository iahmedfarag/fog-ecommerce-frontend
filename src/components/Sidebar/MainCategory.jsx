import React, { useState } from 'react'
import Categories from './Categories'
import { SlArrowRight } from "react-icons/sl"
import { styled } from 'styled-components'

export default function MainCategory({ mainCategory, categories, subCategories }) {
    const [mainCategoryHovered, setMainCategoryHovered] = useState(false)




    return (
        <Wrapper className="mainCategory">
            <a href="/" className="content" onMouseOver={() => setMainCategoryHovered(true)} onMouseLeave={() => setMainCategoryHovered(false)}>
                <div className="icon"><img src={mainCategory.icon.secure_url} alt="" /></div>
                <p className="text">{mainCategory.name}</p>
                <div className="more flex"><SlArrowRight /></div>
            </a>
            {
                categories.map(cat => {
                    if (cat?.mainCategory === mainCategory?._id) {
                        return <Categories key={cat._id} category={cat} subCategories={subCategories} mainCategoryHovered={mainCategoryHovered} />
                    }
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
            display: flex;
            align-items: center;
            .content {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                /* gap: 10px; // gap between content - icon */
                padding: 12px 0;
                
                .icon {
                    display: flex;
                    width: 40px;
                    margin-left: 20px;
                    img {
                        width: 24px;
                    }
                }
                .text {
                    text-transform: capitalize;
                    white-space: nowrap; //
                    opacity: 0;
                    transition: 0.3s; // transition
                }
                .more {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 10px;
                    opacity: 0;
                    transition: 0.2s;
                }

            
            }

`