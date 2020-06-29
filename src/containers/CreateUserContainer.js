import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BackComponent } from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { postUserCreate } from '../actions/userActions';
import { connect } from 'react-redux';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
	return {
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser,
	};
};

class CreateUserContainer extends Component {
	handleSubmit(data) {
		this.props.dispatch(postUserCreate(data));
	}
	render() {
		if (this.props.getResponDataUser || this.props.errorResponDataUser) {
			if (this.props.errorResponDataUser) {
                swal(
                    'Failed!',
                    this.props.errorResponDataUser,
                    'error'
                );
			} else {
				swal(
					'User Created!',
					'Nama : ' + this.props.getResponDataUser.nama + ' , Umur : ' + this.props.getResponDataUser.umur,
					'success'
				);
			}
		}

		return (
			<Container>
				<BackComponent></BackComponent>
				<h4>Create User</h4>
				<FormComponent onSubmit={(data) => this.handleSubmit(data)}></FormComponent>
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(CreateUserContainer);
