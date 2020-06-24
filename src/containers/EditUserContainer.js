import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { BackComponent } from '../components/BackComponent'


export default class EditUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent></BackComponent>
                <h4>Edit User</h4>
            </Container>
        )
    }
}
