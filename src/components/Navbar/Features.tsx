import { nanoid } from 'nanoid'
import { BiSupport, BiWorld } from "react-icons/bi"

const features = [
    { id: nanoid(5), title: "24 Support", info: "+2 010-698-58429", icon: <BiSupport /> },
    { id: nanoid(5), title: "Worldwide", info: "Free Shipping", icon: <BiWorld /> }
]

export default function Features() {
    return (
        <div className="features">
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

        </div>
    )
}
