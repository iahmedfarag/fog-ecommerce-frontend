import { styled } from "styled-components"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from 'react'
import MainCategory from "./MainCategory"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { closeSidebar } from "../../redux/generalSlice"

export default function Sidebar() {
    const { mainCategories } = useAppSelector((state) => state.products)
    const { isSidebarOpen } = useAppSelector((state) => state.general)
    const [sideBarHoverd, setSideBarHoverd] = useState(false)
    const dispatch = useAppDispatch()

    const handleMouseOver = () => {
        setSideBarHoverd(true)
    }
    const handleMouseLeave = () => {
        setSideBarHoverd(false)
    }




    return (
        <Wrapper className={`aside ${sideBarHoverd ? 'open' : ""} ${isSidebarOpen ? 'openResponive' : ''}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <header>
                <div className="icon flex"><RxHamburgerMenu /></div>
                <p className="text">All Categories</p>
            </header>
            <div className="mainCategories">
                {
                    mainCategories.map(mainCat => <MainCategory key={mainCat._id} mainCategory={mainCat} />)
                }
            </div>
            <div className={`layer ${isSidebarOpen && 'active'}`} onClick={() => dispatch(closeSidebar())}></div>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    position: fixed;
    left: 0px;
    top: 0;
    z-index: 3;
    height: 100%;
    background-color: var(--white);
    box-shadow: rgba(137, 137, 171, 0.2) 0px 7px 29px 0px;

    width: 60px;
    transition: 0.3s all ease-in-out;
    overflow: hidden;


    transition: 0.3s;


    &.open {
        width: 300px;
        header {
            .icon {
            }
            .text {
                opacity: 1;
            }
        }
        .mainCategories {
            .mainCategory {
                .content {
                    .text {
                        opacity: 1;
                    }
                    .more {
                        opacity: 1;
                    }
                }
            }
        }
    }


    header {
        display: flex;
        align-items: center;
        /* gap: 10px; // gap between content - icon */

        background-color: var(--main-blue);
        color: var(--white);

        padding: 10px 0;
        border-radius: 25px;
        margin: 10px;
        .icon {
            display: flex;
            align-items: center;
            width: 40px;
            font-size: 22px;
            /* background-color: red; */
            margin-left: 9px; // center the svg
        }
        .text {
            white-space: nowrap; // 
            opacity: 0;
            transition: 0.3s; // transition
        }
        /* margin-bottom: 25px; // margin between header and main-cateogries */
    
    }
    .mainCategories {
        display: flex;
        flex-direction: column;
        /* gap: 25px; // gap between main-categories */
        & .content:hover {
            color: var(--main-blue);
        }
    
    }

    .layer {
        position: fixed;
        z-index: 3;
        width: calc(100% - 300px);
        height: 100%;
        top: 0;
        left: 300px;
        display: none;
        &.active {
            display: block;
        }
    }



    
    @media(max-width: 992px) {
        left: -60px;
        &.open {
            width: 0;
        }
        &.openResponive {
            left: 0;
            width: 300px;
            header {
            .icon {
            }
            .text {
                opacity: 1;
            }
        }
            .mainCategories {
            .mainCategory {
                .content {
                    .text {
                        opacity: 1;
                    }
                    .more {
                        
                    }
                }
            }
        }
        }
    }

    

`