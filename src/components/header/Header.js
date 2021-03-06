import {Link} from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <div className={"header"}>
            <ul className={'headerNav'}>
                <li className={'headerLink'}>
                    <Link className={'headerLinkInfo'} to="/">Home</Link>
                </li>
                <li className={'headerLink'}>
                    <Link className={'headerLinkInfo'} to="/movie">Movie</Link>
                </li>
                <li className={'headerLink'}>
                    <Link className={'headerLinkInfo'} to="/like">Like</Link>
                </li>
            </ul>

        </div>
    )
}