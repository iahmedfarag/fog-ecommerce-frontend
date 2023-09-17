import { styled } from "styled-components"
import UserDetails from "./UserDetails"
import SearchForm from "./SearchForm"
import { RxHamburgerMenu } from "react-icons/rx"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { closeSidebar, openSidebar } from "../../redux/generalSlice"
import { Link } from "react-router-dom"





export default function SecondNavbar() {
    const dispatch = useAppDispatch()
    const { isSidebarOpen } = useAppSelector((state) => state.general)

    return (
        <Wrapper>
            <div className="container flex">
                {/* links */}

                <div className="left">
                    <button className="all-categories-btn" onClick={() => isSidebarOpen ? dispatch(closeSidebar()) : dispatch(openSidebar())}> <div className="flex"><RxHamburgerMenu /></div> <p>All Categories</p></button>
                    <Link to={`/all-products`} className="all-products-btn">All Products</Link>
                </div>

                {/*  */}
                <UserDetails />

                <SearchForm />
            </div>
        </Wrapper >
    )
}


const Wrapper = styled.div`
    background-color: var(--light-blue);
    .container {
        height: 60px;
        justify-content: space-between;
        gap: 10px;
        .left {
            display: flex;
            gap: 10px;
            .all-categories-btn {
                display: flex;
                align-items: center;
                background-color: var(--white);
                padding: 5px 10px;
                border-radius: 25px;
                div {
                    font-size: 20px;
                    margin-right: 8px;
                    background-color: var(--main-blue);
                    color: var(--white);
                    padding: 5px;
                    border-radius: 50%;
                }
                p {
                    font-size: 14   px;
                }
                &:hover {
                    opacity: .7;
                }
                @media(max-width: 992px) {
                    display: none;
}

            }
            .all-products-btn {
                padding: 10px 15px;
                background-color: var(--white);
                border-radius: 25px;
                font-size: 14px;
                &:hover {
                    opacity: 0.7;
                }

            }
        }
        
        .links {
            /* margin-left: auto; */
            gap: 30px;

            .currency {
                position: relative;
                z-index:55; 
                button {
                    font-weight: bold;
                    transition: 0.1s;
                    padding: 10px;
                    border-radius: 25px;
                }
                ul {
                    position: absolute;
                    bottom: -55px;
                    right: 0;
                    padding: 10px;
                    width: 100px;
                    background-color: var(--white);
                    display: none;
                    &.active {
                        display: block;
                    }
                    li {
                        button {
                            width: 100%;
                            text-align: left;
                            font-weight: 400;
                            color: grey;
                            &:hover {
                                color: var(--main-blue);
                            }
                        }
                    }
                }
            }

            ul {
                gap: 25px;
                li {
                    a {
                        display: flex;
                        align-items: center;
                        background-color: var(--white);
                        padding: 8px;
                        border-radius: 50%;
                        
                        position: relative;

                        transition: 0.1s;
                        &:hover {
                            opacity: .6;
                        }
                        div {
                            display: flex;
                            align-items: center;
                            font-size: 22px;
                        }
                        p {
                            position: absolute;
                            top: -5px;
                            right: -5px;

                            color: var(--main-blue);
                            font-size: 12px;
                            
                            background-color: var(--white);
                            padding: 1px 4px;
                            border-radius: 50%;
                        }
                }

                }
            }

            .cart {
                a {
                    gap: 7px;
                    transition: 0.1s;
                        &:hover {
                            opacity: .6;
                        }
                    div {
                        background-color: var(--main-blue);
                        color:  var(--white);
                        padding: 3px;
                        border-radius: 50%;

                        position: relative;
                        div {
                            font-size: 22px;
                        }
                        p { 
                            position: absolute;
                            top: -5px;
                            right: -5px;

                            color: var(--main-blue);
                            font-size: 12px;
                            
                            background-color: var(--white);
                            padding: 1px 4px;
                            border-radius: 50%;
                        }
                    }
                    p {
                        /* font-weight: 400; */
                        font-size: 14px;
                    }
                }
            }
        }

        form {
        flex: 1;
        /* margin-left: 20px; */
        position: relative;
        display: none;
        input {
            width: 100%;
            padding: 15px;
            border-radius: 25px;
            border: 1px solid #ccc;
            outline: none;
        }
        button {
            background-color: var(--main-blue);
            color: var(--white);
            padding: 7px;
            font-size: 24px;
            display: flex;
            align-items: center;
            border-radius: 50%;

            //
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;

        }
        }
    }

    @media (max-width: 1200px) {
        .container {
            .navLinks {
                gap: 10px;
                li {
                    a {
                        h4 {
                            font-size: 14px;
                        }
                    }
                }
            }
            .links {
                gap: 25px;
                ul {
                    gap: 15px;
                }
            }
        }
    }

    @media (max-width: 992px) {
        .container {
            > button {
                display: none;
            }
            .links {
                display: none;
            }
            form {
                display: block;

            }
        }
    }


`



