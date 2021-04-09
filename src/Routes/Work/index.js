import React, { Component } from 'react'
import Page from '../../Components/HOC/page'
import "../Work/style.scss"

class Work extends Component{
    render(){
        return(
            <>
              <Page
              showHeader
              showFooter
              >
                    <h1>Work</h1>
              </Page>
            </>
        )
    }
}
export default Work;