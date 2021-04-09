import React, { Component } from 'react'
import { Row , Col } from 'react-bootstrap'
import Page from '../../Components/HOC/page'
import "../About/style.scss"
import MyValues from '../About/Components/values/index'
import MyValuesConstant from '../../Constant/MyValuesContant'

class AboutMe extends Component{
    render(){
        return(
            <>
              <Page
                showHeader
                showFooter
              >
                <main className="ToolAboutPage row">
                   <div className="ToolLilBit">
                      <ul>
                          <li>
                               <h1>
                                    Hey! I'm Keshav, Sup?
                               </h1>
                          </li>
                          <li>
                               <p>
                               My name is Keshav Rohilla based in Chandigarh, India. I'm passionate about improving the lives of others through design and coding. 
                               I'm constantly learning new things everyday and love meeting people who are motivated and unafraid of sharing their ideas with the world.
                               </p>

                               <p>
                               I’ve been Front-end Developing for over 1 year 6 months and I’ve gained experience working alongside visionaries ranging from startup founders to Googlers.
                               </p>
                               <p>
                               I’m an avid dreamer who enjoys solving problems and making a positive impact through design and coding. I specialise in React Development for mobile and web. As a React Developer, my goal is to help and empower people with delightful experience and better relationships.
                              </p>
                              <p>
                              In my spare time, I like to work on Cinematic shortfilm video editing and Vlogging, drinking coffee, enjoying reading novels, Designing and coding.
                              </p>
                          </li>
                      </ul>
                   </div>

                   
                
                  <div className="ToolMyValues">
                      <Row>
                           <h1>
                           My values
                           </h1>

                           {
                             MyValuesConstant.map((val, ind) =>{
                                return  <MyValues 
                                          HEAD={val.HEAD}
                                          BODY={val.BODY}
                                         
                                         />
                             })
                           }
                       
                          
                      </Row>
                  </div>

                </main>
              </Page>
           
            </>
        )
    }
}
export default AboutMe;