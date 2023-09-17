import { nanoid } from 'nanoid'
import { BiSupport, BiWorld } from "react-icons/bi"
import { styled } from 'styled-components'

const features = [
    { id: nanoid(5), title: "24 Support", info: "+2 010-698-58429", icon: <BiSupport /> },
    { id: nanoid(5), title: "Worldwide", info: "Free Shipping", icon: <BiWorld /> }
]

export default function Features() {
    return (
        <Wrapper className="features">
            {
                features.map(feature => {
                    const { id, title, info, icon } = feature
                    return <div className="feature" key={id}>
                        <div className="icon">{icon}</div>
                        <div className="info">
                            <h5>{title}</h5>
                            <p>{info}</p>
                        </div>
                    </div>
                })
            }

        </Wrapper>
    )
}

const Wrapper = styled.div`
            display: flex;
        align-items: center;
        gap: 40px;
        .feature {
            display: flex;
            align-items: center;
            gap: 15px;
            .icon {
                font-size: 30px;
            }
            .info {
                h5 {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                p {
                    font-size: 14px;
                    color:var(--dark-blue)
                }
            }
        }


`