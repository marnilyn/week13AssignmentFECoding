import React, {Component} from "react";

export default class Nav extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </nav>
        )
    }
}//this shows the nav bar --- none of listed items link to any other page, it's just for display purposes