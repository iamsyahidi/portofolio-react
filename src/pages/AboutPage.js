import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content';

export default class AboutPage extends React.Component {

    render (props){
        return(
            <div>
                <Hero title={this.props.title}/>
    
                <Content>
    
                <p>Hello, my name is Ilham. I'm a full stack engineer with experience in Java and React.</p>
    
                </Content>


            </div>
        );
    }
    
}