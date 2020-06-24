import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BackComponent } from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { postUserCreate } from '../actions/userActions';
import { connect } from 'react-redux';

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data))
	}
	render() {
		return (
			<Container>
				<BackComponent></BackComponent>
				<h4>Create User</h4>
				<FormComponent onSubmit={(data) => this.handleSubmit(data)}></FormComponent>
			</Container>
		);
	}
}

export default connect ()(CreateUserContainer);
