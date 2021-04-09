import React, { Component } from 'react'
import "../Landing/style.scss"
import Page from '../../Components/HOC/page/index'
import { Col, Row } from 'react-bootstrap'
import ImageIcon from '../../Components/Atoms/ImageIcon'
import { Images } from '../../shared/Assets'
import LandingBanner from '../Landing/Components/LandingBanner/Index'
import Introduce from '../Landing/Components/Introduce/Index'




class Homepage extends Component{
    render(){
        return(
                <>
                
                    <Page 
                        showHeader
                        showFooter
                    >
                        
                        <LandingBanner />
                        <Introduce />
                    </Page>
                
                </>
        )
    }
}
export default Homepage;