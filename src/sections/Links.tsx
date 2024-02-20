import LinksArr from "../utils/links.ts";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="links">
            <ul>
                {LinksArr.map((link: { id: any; text: any; url: any }) => {
                    const { id, text, url } = link;
                    return (
                        <li key={id}>
                            <Link to={url}>{text}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Links;
