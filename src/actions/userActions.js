import axios from 'axios';

export const GET_USERS_LIST = 'GET_USER_LIST';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const POST_USER_CREATE = 'POST_USER_CREATE';

export const getUsersList = () => {
	return (dispatch) => {
		axios
			.get('https://my-json-server.typicode.com/iamsyahidi/demo/users')
			.then(function (response) {
				// handle success
				console.log(response);
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				dispatch({
					type: GET_USERS_LIST,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
		// .then(function () {
		// 	// always executed
		// });
	};
};

export const getUserDetail = (id) => {
	return (dispatch) => {
		axios
			.get('https://my-json-server.typicode.com/iamsyahidi/demo/users/'+id)
			.then(function (response) {
				console.log(response);
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				console.log(error);
				dispatch({
					type: GET_USER_DETAIL,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};

export const clearUserDetail = () => {
	return (dispatch) => {
		dispatch({
            type: GET_USER_DETAIL,
            payload: {
                data: false,
                errorMessage: false,
            },
        });
	};
};

export const postUserCreate = (data) => {
	return (dispatch) => {
		axios
			.post('https://my-json-server.typicode.com/iamsyahidi/demo/users', data)
			.then(function (response) {
				console.log(response);
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch(function (error) {
				console.log(error);
				dispatch({
					type: POST_USER_CREATE,
					payload: {
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
