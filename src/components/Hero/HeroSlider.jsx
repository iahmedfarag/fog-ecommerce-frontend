import Slider from "react-slick"
import img1 from "../../assets/apple-shopping-event.jpg"
import img2 from "../../assets/pre-order-g-pixel-7.jpg"
import img3 from "../../assets/discount-on-all-smart-appliances.jpg"
import { styled } from "styled-components";
import { nanoid } from "nanoid";


const slides = [
    {
        id: nanoid(5),
        title: "Apple Shopping Event",
        description: "Shop great deals on MacBook, iPad, iPhone and more.",
        image: img1,
    },
    {
        id: nanoid(5),
        title: "The new Google Pixel 7",
        description: "Shop great deals on MacBook, iPad, iPhone and more.",
        image: img2,
    },
    {
        id: nanoid(5),
        title: "Discount on all Smart appliances up to 25%",
        description: "Shop great deals on MacBook, iPad, iPhone and more.",
        image: img3,
    },
]

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    return (
        <Wrapper>
            <Slider {...settings}>
                {
                    slides.map((slide, index) => {
                        return <div key={slide.id} className="slide-div">
                            <img src={slide.image} alt="" />
                            <div className="content">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                                <button className="main-btn">{index === 1 ? "Pre-Order Now" : "Shop Now"}</button>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    width: calc(50%  - 10px);
    height: 460px;
    position: relative;
    user-select: none;
    img {
        width: 100%;
        height: 460px;
        /* object-fit: cover; */
        border-radius: 10px;
    }

    .slick-slider {
        height: 460px;
        .slick-slide {
            user-select: none;
        }
        ul {
            bottom: 10px;
            width: fit-content;
            background-color: var(--white);
            border-radius: 25px;
            left: 50%;
            transform: translateX(-50%);
            padding: 0 2px;
            li {
                margin: 0 2px;
                margin-bottom: 1px;
                button {
                    &::before {
                        font-size: 13px;
                    }
                }
                &.slick-active {

                }
            }
        }
    }

    .slick-slider {
        .slick-list {
            .slick-track {
                .slick-slide {
                    position: relative;
                }
            }
        }
    }

    .content {
        position: absolute;
        z-index: 99999;
        top: 0;
        left: 0;
        padding: 30px;
            display: flex;
            flex-direction: column;
            h2 {
                color: var(--white);
                font-size: 35px;
                font-weight: 400;
                margin-bottom: 20px;
            }
            p {
                color: #e4e4e4;
                margin-bottom: 15px;
                line-height: 1.6;
            }
    }


    @media(max-width: 1200px) {
        .content {
            h2 {
                font-size: 26px;
            }
            p {
                font-size: 15px;

            }
        }
    }
    @media(max-width: 992px) {
        width: calc(100%);

    }

    @media(max-width: 768px) {
        img {
            object-fit: none;
        }
        .content {
            width: 100%;
            h2 {
                font-size: 24px;
            }
            p {
                /* font-size: 15px; */
            }
        }
        .slick-slider {
            .slick-dots {
                display: none !important;
            }
        }
    }


    @media(max-width: 576px) {
        .content {
            padding: 30px 15px;
            h2 {
                font-size: 18px;
                margin-bottom: 15px;
            }
            p {
                /* font-size: 1px; */
            }
        }
    }

`