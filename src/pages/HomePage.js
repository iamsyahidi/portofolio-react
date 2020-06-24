import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

export default class HomePage extends React.Component {

    render(props){
        return(
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <Carousel />               
            </div>
        );
    }

}