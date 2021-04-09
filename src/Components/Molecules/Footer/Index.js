import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageIcon from '../../../Components/Atoms/ImageIcon'
import { Images } from '../../../shared/Assets'
import "../Footer/style.scss";

const Footer = () =>{
    return(
        <>

                        <footer className="ToolFooter"> 
                            <Row className="d-flex align-items-center">
                                 <Col lg="6">
                                        <ul>
                                            <li>
                                                <h2>
                                         Let make some together awsome designs
                                                </h2>
                                            </li>
                                            <li>
                                                <h3>
                                        Made with <ImageIcon 
                                        SRC={Images.heart} 
                                        /> 2021 © Keshav Rohilla
                                                </h3>
                                            </li>
                                        </ul>
                                 </Col>
                                 <Col lg="6">
                                        <ul className="SocialFooter float-end">
                                            <li>
                                                <p> <a href="mailto:keshavrohilla244@gmail.com">Email</a></p>
                                            </li>
                                            <li>
                                                <p> <a href="tel:7988251922">Phone</a></p>
                                            </li>
                                            <li>
                                                <p> <a href="https://www.linkedin.com/in/keshav-rohilla-7a1b4b19a/" target="_blank">Linkedin</a></p>
                                            </li>
                                            <li>
                                                <p> <a href="https://www.instagram.com/rohillakshv/" target="_blank">Instagram</a></p>
                                            </li>
                                        </ul>
                                 </Col>
                            </Row>
                        </footer>
           
        </>
    )
}
export default Footer;