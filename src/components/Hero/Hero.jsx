import { styled } from "styled-components"
import HeroSlider from "./HeroSlider"
import MainPoster from "./MainPoster"
import SmallPoster from "./SmallPoster"
import { nanoid } from "nanoid"
import img1 from "../../assets/new-dualsense.jpg"
import img2 from "../../assets/instant-cameras.jpg"

const posters = [
    {
        id: nanoid(5),
        title: "New Dual Sense",
        description: "For PlayStation 5",
        image: img1
    },
    {
        id: nanoid(5),
        title: "Instant Cameras",
        description: "Get photo paper as a gift",
        image: img2
    }
]

export default function Hero() {
    return (
        <Wrapper>
            <div className="container">
                <HeroSlider />
                <div className="posters">
                    <MainPoster />
                    {
                        posters.map(poster => {
                            return <SmallPoster key={poster.id} poster={poster} />
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    padding: 20px 0;
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .posters {
            display: flex;
            flex-wrap: wrap;
            width: calc(50% - 10px);
            gap: 20px;
            
        }
    }

    @media(max-width: 992px) {
        .container {
            .posters {
                width: calc(100%);
            }
        }
    }

`