import React from 'react';
import '../../HOC/page/style.scss';
import Header from '../../Molecules/Header/index'
import Footer from '../../Molecules/Footer/Index'
import {Layout} from 'antd'


const{ Content } = Layout;
const Page = (props) =>{
    return(
        <> 
          <main className="ToolPageWrap">
          {
                        props.showHeader &&
                        <Header />
                        }
                <Layout className="layout PageWrap">
                       

                    <Content>
                        {props.children}
                    </Content>
                 
                    

                    </Layout>
                    {
                        props.showFooter &&
                        <Footer />
                    }
          </main>
           
          
           

            
        </>
    )
}
export default Page;