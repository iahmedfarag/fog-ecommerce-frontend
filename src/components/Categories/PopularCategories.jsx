import { styled } from "styled-components"
import CategoryCard from "./CategoryCard"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux"



export default function PopularCategories() {
    const { subCategories } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const popularSubCategories = subCategories.filter((item) => item.featured)


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Wrapper className="popular-categories">
            <div className="container">
                <h2>Popular Categories</h2>
                <div className="categories">
                    <Slider {...settings}>
                        {popularSubCategories.map(subCategory => {
                            return <CategoryCard key={subCategory._id} subCategory={subCategory} />
                        })}
                    </Slider>
                </div>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section`
    padding: 50px 0;

    .container {
        h2 {
            margin-bottom: 25px;
        }
        .categories {
            margin: 0;
            .slick-slider {
                margin: 0;
                .slick-list {
                    margin: 0;
                    .slick-track {
                        margin: 0;
                        /* margin: 0 -30px; */
                        .slick-slide{
                            margin: 0;
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
`