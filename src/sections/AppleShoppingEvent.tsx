import { styled } from 'styled-components'
import Countdown from 'react-countdown';
import image from "../assets/apple-shopping-event.png"
import background from "../assets/Content.jpg"
import Slider from "react-slick"
import { AiFillStar } from "react-icons/ai"
import CountDownRender from '../components/CountDown'
import { useAppSelector } from '../redux/hooks';
import LoadingErrorHandler from "../components/LoadingErrorHandler"
import { Link } from 'react-router-dom';

export default function AppleShoppingEvent() {
    const { products, isLoading, error } = useAppSelector((state) => state.products)

    const appleProducts = products.filter((item) => item.brand === 'apple' || item.brand === 'acer')

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <LoadingErrorHandler isLoading={isLoading} error={error}>

            <Wrapper style={{ backgroundImage: `url(${background})` }} className='event' >
                <div className="container" >
                    <div className='up'>
                        <div className="imgWrapper">
                            <img src={image} alt="event img" />
                        </div>
                        <div className="content">
                            <h2>Apple Shopping Event</h2>
                            <h3>Hurry and get discounts on all Apple devices up to 20%</h3>
                            <Countdown date={Date.now() + 1000002009} renderer={CountDownRender} />
                            <button className='flex'>Go Shopping</button>
                        </div>
                    </div>
                    <div className="products">
                        <Slider {...settings}>
                            {appleProducts.map(product => {
                                return <div className='product' key={product._id}>
                                    <Link draggable={false} to={`/${product.mainCategory.slug}/${product.category.slug}/${product.subCategory.slug}/${product.slug}`} className="img">
                                        <img draggable={false} src={product.mainImage.secure_url} alt="" />
                                    </Link>
                                    <div className="content">
                                        <Link draggable={false} to={`/${product.mainCategory.slug}/${product.category.slug}/${product.subCategory.slug}/${product.slug}`} className="title">{product.name.split(" ").slice(0, 2).join(" ")}</Link>
                                        <div className="rate">
                                            <div><AiFillStar /></div>
                                            <div><AiFillStar /></div>
                                            <div><AiFillStar /></div>
                                            <div><AiFillStar /></div>
                                            <div><AiFillStar /></div>
                                        </div>
                                        <h4 className="price">${product.price}.00</h4>
                                    </div>
                                </div>
                            })}
                        </Slider>
                    </div>
                </div>
            </Wrapper >
        </LoadingErrorHandler>

    )
}


const Wrapper = styled.section`
    background-position: center center;
    background-repeat: repeat-y;
    padding: 50px 0;
    .container {
        
        .up {
            display:flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
            margin-bottom: 20px;
            .imgWrapper {
                width: calc(40% - 10px);
                text-align: right;
                img {
                    width: 100%;
                }
            }
            .content {
                width: calc(60% - 10px);

                h2 {
                    font-size: 52px;
                    font-weight: 500;
                    margin-bottom: 15px;
                }
                >h3 {
                    font-size: 24px;
                    font-weight: 400;
                    margin-bottom: 25px;
                    color: rgba(15, 15, 15, 0.8);
                }
                .countDown {
                    margin-bottom: 25px;
                    .box {
                        width: 90px;
                        /* padding: 10; */
                        h3 {
                            font-size: 30px;
                        }
                        p {
                            font-size: 18px;
                        }
                    }
                }
                button {
                    background-color: var(--main-blue);
                    color: var(--white);
                    padding: 12px 24px;
                    border-radius: 5px;
                    font-size: 14px;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }

        .slick-slide {
            padding: 0 10px;
        }
    
            .product {
                display: flex !important;
                align-items: center;
                background-color: var(--white);
                /* margin: 0 20px; */
                .img {
                    img {
                        width: 100px;
                    }
                }
                .content {
                    .title {
                        margin-bottom: 7px;
                        font-weight: 400;
                        font-size: 16px;
                        display: block;
                    }                    
                    .rate {
                        display: flex;
                        gap: 1px;
                        color: #d2b300;
                    }
                    .price {
                        font-weight: 400;
                        color: var(--main-blue);
                        margin-top: 5px;
                        font-size: 16px;

                    }
            }

            }
    }


        @media(max-width: 1200px) {
            .container {
                padding-top: 50px;
                padding-bottom: 50px;
                .up {
                    .content {
                        h2 {
                            font-size: 40px;
                            margin-bottom: 10px;
                        }
                        > h3 {
                            font-size: 18px;
                            margin-bottom: 20px;
                        }
                        .countDown {
                            margin-bottom: 20px;
                            .box {
                                h3 {
                                    font-size: 24px;
                                }
                                p {
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }
            }
        }
        @media(max-width: 768px) {
            
            .container {
                .up {
                gap: 0;

                    .imgWrapper {
                        width:100%;
                        text-align: center;
                        img {
                            object-fit: cover;
                        }
                    }
                    .content {
                        width: 100%;
                        h2 {
                            font-size: 24px;
                        }
                        h3 {
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        .countDown {
                            .box {
                                width: 55px;
                                h3 {
                                    font-size: 20px;
                                }
                                p {
                                    font-size: 16px;
                                }
                            }
                        }
                        button {

                        }
                    }
                }
            }
        }

        @media(max-width: 576px) {

        }


`