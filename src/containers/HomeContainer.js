import React from 'react';
import TableComponent from '../components/TableComponent';
import { connect } from 'react-redux';
import { getUsersList, clearUserDetail } from '../actions/userActions';

class HomeContainer extends React.Component {
	componentDidMount() {
        this.props.dispatch(getUsersList());
        this.props.dispatch(clearUserDetail());
	}

	render(props) {
		return (
			<div>
				<TableComponent />
			</div>
		);
	}
}

export default connect()(HomeContainer);
