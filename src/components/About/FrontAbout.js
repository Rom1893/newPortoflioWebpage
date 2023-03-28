import React from "react";
import About from "../About/About";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "bootstrap/dist/css/bootstrap.min.css";
import lake from "../../Assets/lake.svg"; //<a href="https://www.vecteezy.com/free-vector/parallax">Parallax Vectors by Vecteezy</a>
import sky from "../../Assets/sky.png"; //<a href="https://www.vecteezy.com/free-vector/parallax">Parallax Vectors by Vecteezy</a>
import Particle from "../Particle";


function FrontHome() {

    return (
        <section>
            <Parallax pages={1.5} className="parallax-container2">
                <Particle />

                <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    sticky={{ start: 0, end: 2 }}
                    style={{
                        backgroundImage: `url(${sky})`,
                        backgroundSize: "cover",
                        zIndex: -5
                    }}
                >
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.3}
                    style={{
                        zIndex: 1
                    }}
                    className="parallax-layer"
                >
                    <About className="home-content"/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0.7}
                    speed={0.3}
                    style={{
                        backgroundImage: `url(${lake})`,
                        backgroundSize: "cover",
                        zIndex: -5
                    }}
                    className="parallax-layer"
                > 
                </ParallaxLayer>

            </Parallax>
        </section>
    )
}

export default FrontHome;
