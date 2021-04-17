import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../LandingBanner/style.scss"
import Typewriter from 'typewriter-effect';


const LandingBanner = () =>{
    return(
        <>
                        <div className="LandingBaner">
                            <Row>
                                <Col lg="12">
                                    <h1>
                                        <strong>Hey</strong> Keshav here!<br />
                           I’m a React Developer, focused on creating 
                           {/* <Typewriter
                            options={{
                                strings: ['Web Experience', 'Mobile Experience'],
                                autoStart: true,
                                loop: true,
                            }}
                            /> */}
                                </h1>
                                <marquee behavior="scroll" scrollamount="21" direction="left" onmouseover="stop()" onmouseout="start()">
                                    <h2> Web And Mobile Experience </h2>
                                </marquee>
                                
                                </Col>
                            </Row>
                        </div>
        </>
    )
}
export default LandingBanner;
