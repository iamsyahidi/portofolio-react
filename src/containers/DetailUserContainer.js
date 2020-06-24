import React from 'react';
import Container from 'react-bootstrap/Container';
import { BackComponent } from '../components/BackComponent';
import { getUserDetail } from '../actions/userActions';
import { connect } from 'react-redux';
import DetailUserComponent from '../components/DetailUserComponent';
import { Spinner } from 'reactstrap';

const mapStateToProps = (state) => {
	return {
		getUserDetail: state.users.getUserDetail,
		errorUserDetail: state.users.errorUserDetail,
	};
};

class DetailUserContainer extends React.Component {
	componentDidMount() {
		this.props.dispatch(getUserDetail(this.props.match.params.id));
	}
	render() {
		return (
			<Container>
				<BackComponent></BackComponent>
				<h4>Detail User {this.props.match.params.id} </h4>
				{this.props.getUserDetail ? (
					<DetailUserComponent />
				) : (
					<div className="text-center">
						{this.props.errorUserDetail ? <h3>{this.props.errorUserDetail}</h3> : <Spinner color="dark" />}
					</div>
				)}
			</Container>
		);
	}
}

export default connect(mapStateToProps)(DetailUserContainer);
