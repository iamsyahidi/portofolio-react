import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { BackComponent } from '../components/BackComponent';
import FormComponent from '../components/FormComponent';
import { connect } from 'react-redux';
import { getUserDetail, putUserUpdate } from '../actions/userActions';
import { Spinner } from 'reactstrap';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
	return {
		getUserDetail: state.users.getUserDetail,
		errorUserDetail: state.users.errorUserDetail,
		getResponDataUser: state.users.getResponDataUser,
		errorResponDataUser: state.users.errorResponDataUser,
	};
};

class EditUserContainer extends Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}

	handleSubmit(data) {
		this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
	}

	render() {
		if (this.props.getResponDataUser || this.props.errorResponDataUser) {
			if (this.props.errorResponDataUser) {
				swal('Failed!', this.props.errorResponDataUser, 'error');
			} else {
				swal(
					'User Updated!',
					'Nama : ' + this.props.getResponDataUser.nama + ' , Umur : ' + this.props.getResponDataUser.umur,
					'success'
				);
			}
		}

		return (
			<Container>
				<BackComponent></BackComponent>
				<h4>Edit User {this.props.match.params.id}</h4>
				{this.props.getUserDetail ? (
					<FormComponent onSubmit={(data) => this.handleSubmit(data)} />
				) : (
					<div className="text-center">
						{this.props.errorUserDetail ? <h3>{this.props.errorUserDetail}</h3> : <Spinner color="dark" />}
					</div>
				)}
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(EditUserContainer);
