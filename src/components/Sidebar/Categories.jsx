import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Categories({ category, subCategories, mainCategoryHovered }) {
    const [categoryHovered, setCategoryHovered] = useState(false)


    return (
        <Wrapper className={`categories ${mainCategoryHovered || categoryHovered ? 'open' : ""}`} onMouseOver={() => setCategoryHovered(true)} onMouseLeave={() => setCategoryHovered(false)}>
            <div className="category">
                <a href="/" className="title">{category?.name}</a>
                <div className="subCategories">
                    {
                        subCategories?.map(subCat => {
                            if (subCat?.category === category?._id) return <a key={subCat._id} href={`/`} className="subCategory">{subCat.name}</a>
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
                position: fixed;
                top: 0;
                width: 270px;
                height: 100%;
                background-color: var(--white);
                z-index: 55;
                padding: 10px;
                // transition
                left: 290px;
                opacity: 0;
                transition: 0.3s;
                visibility: hidden;
                &.open {
                    left: 300px;
                    opacity: 1;
                    visibility:visible;
                    @media(max-width: 992px) {
                opacity: 0;
                visibility: hidden;
                        
                    }
                }
                .category {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    .title {
                        font-weight: 500;
                        text-transform: capitalize;
                    }

                    .subCategories {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        .subCategory {
                            color: gray;
                        }
                    }
                }

`