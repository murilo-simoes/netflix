import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import {FooterContainer} from '../containers/footer';
import {JumbotronContainer} from '../containers/jumbotron'
import {FeatureComponent} from '../containers/feature'

const Home = () => {
    return ( 
        <>
                <HeaderContainer>
                <FeatureComponent/>
                </HeaderContainer>
                <JumbotronContainer /> 
                <FaqsContainer />
                <FooterContainer />
        </>
     );
}
 
export default Home;