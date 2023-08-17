import { nanoid } from "nanoid"
import { styled } from "styled-components"
import img from "../../assets/mobile-phones-apple-iphone-200x200.jpg"
import img2 from "../../assets/Laptops-1-200x200.jpg"
import img3 from "../../assets/motherboards-200x200.jpg"
import CategoryCard from "./CategoryCard"
import Slider from "react-slick"

const categories = [
    {
        id: nanoid(5),
        title: "Apple IPhone",
        count: 8,
        image: img
    },
    {
        id: nanoid(5),
        title: "Motherboards",
        count: 8,
        image: img3
    },
    {
        id: nanoid(5),
        title: "Headsets",
        count: 8,
        image: img2
    },
    {
        id: nanoid(5),
        title: "Motherboards",
        count: 8,
        image: img3
    },
    {
        id: nanoid(5),
        title: "Headsets",
        count: 8,
        image: img2
    },
    {
        id: nanoid(5),
        title: "Motherboards",
        count: 8,
        image: img3
    },
    {
        id: nanoid(5),
        title: "Headsets",
        count: 8,
        image: img2
    },
]

export default function PopularCategories() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
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
                        {categories.map(category => {
                            return <CategoryCard key={category.id} category={category} />
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

        }
        .categories {
            .slick-slider {
                .slick-list {
                    .slick-track {
                        /* margin: 0 -30px; */
                        .slick-slide{
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }
`