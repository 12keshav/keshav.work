import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ImageIcon from '../../../../Components/Atoms/ImageIcon';
import { Images } from '../../../../shared/Assets';
import "../Introduce/style.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';
import RoutesConfig from '../../../../config/RoutesConfig';
import  Router  from "../../../../services/RouterService";


const Introduce = () =>{
    return(
        <>
              <div className="MeIntroduce">
                            <Row className="d-flex align-items-center">
                                <Col lg="9">
                                        <ul>
                                            <li>
                                                <h1>
                                                        Let me introduce myself.
                                                </h1>
                                            </li>
                                            <li>
                                                <p>
                                                I fell in love with Designing and Coding and I have at least learnt something, I think… 🤷‍♂️
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                I am fluent in classics like<span> html & css, bootstrap, javascript and modern JS Library React.</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                My current focus is on  Deep Learning
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                My passion for developing products with<span> Modern Javascript Library</span> <span>like React.js</span>
                                                </p>
                                            </li>
                                            <li>
                                                <a onClick={() => Router.pushRoute(RoutesConfig.ABOUT)} >
                                                    MORE <AiOutlineArrowRight />
                                                </a>
                                            </li>

                                        </ul>
                                </Col>  
                                <Col lg="3">
                                       <ul>
                                            <li>
                                                <ImageIcon 
                                                   src={Images.mypicture}
                                                   style={{width:"250px" , height:"250px"}}
                                                />
                                            </li>
                                       </ul>
                                </Col>
                            </Row>
                        </div>
        </>
    )
}
export default Introduce;
