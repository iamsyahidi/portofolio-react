import React from 'react'

import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    id:0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Ilham Syahidi',
                    subTitle: 'Youtube Channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCkcA-HWP3AWOyAtGlnIByHA',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'https://github.com/iamsyahidi',
                    selected:false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected=items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}