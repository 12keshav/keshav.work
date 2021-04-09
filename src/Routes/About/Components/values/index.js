import React from 'react'
import { Col } from 'react-bootstrap'
import "../values/style.scss"


const MyValues = (props) =>{

    return(
        <>
            <Col lg="12">
                <ul>
                    <li>
                        <h2>
                        {props.HEAD}
                        </h2>
                    </li>
                    <li>
                        <p>
                      {props.BODY}
                        </p>
                    </li>
                </ul>
            </Col>
        </>
    )

}
export default MyValues;