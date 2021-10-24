import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser,
    faPlus,
    faHome,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const user = <FontAwesomeIcon icon={faUser} />;
    const home = <FontAwesomeIcon icon={faHome} />;
    const search = <FontAwesomeIcon icon={faSearch} />;
    return (
        <div className={"menu"}>
            <nav>
                <div className={"button__container"}>
                    <button type={"button"}>{plus}</button>
                </div>
                <ul>
                    <li>{user}</li>
                    <li>{home}</li>
                    <li>{search}</li>
                </ul>
            </nav>
        </div>
    );
}
