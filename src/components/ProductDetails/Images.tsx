import Slider from "react-slick";
import { styled } from "styled-components"
import { imageType, productType } from "../../Types";


export default function Images({ singleProduct }: { singleProduct: productType | null }) {





    const settings = {
        customPaging: function (i: number) {
            return (
                <img src={singleProduct?.images[i].secure_url} alt="" />
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Wrapper className="images">
            <Slider {...settings}>
                {
                    singleProduct?.images?.map((img: imageType, index: number) => {
                        return <img src={img.secure_url} key={index} />
                    })
                }
            </Slider>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: calc(50% - 10px);
    img {
        width: 100%;
        cursor: pointer;
    }
    .slick-slider {
        display: flex !important;
        justify-content: right;
        position: relative !important;
        overflow: hidden;
        .slick-list {
            width: 80% !important;
            @media(max-width: 992px) {
                width: 100% !important;

            }
            .slick-track {
                .slick-slide {
                    > div {
                        img {

                        }
                    }
                }
            }
        }
        .slick-dots {
            position: absolute;
            top: 0%;
            left: 0px;
            /* transform: translateY(-50%); */
            display: flex !important;
            flex-direction: column;
            width: 20% !important;
            @media(max-width: 992px) {
                display: none !important;
            }
        li {
            width: 120px;
            height: 120px;
            &:hover {
                opacity: .7;
            }
            img {
                object-fit: cover;
            }
        }
    }
    }

    @media(max-width: 768px) {
        width: calc(100%);

}


`