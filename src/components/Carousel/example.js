import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
    {
        key: 1,
        content: "1"
    },
    {
        key: 2,
        content: "2"
    },
    {
        key: 3,
        content: "3"
    },
    {
        key: 4,
        content: "4"
    }
];

export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle
    };

    // onChangeInput = e => {
    //   this.setState({
    //     [e.target.name]: parseInt(e.target.value, 10) || 0
    //   });
    // };

    render() {
        return (
            <div
                style={{
                    zIndex: 49,
                    flexDirection: "column",
                    justifyContent: "center",
                }}                
            >
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
            </div>
        );
    }
}
