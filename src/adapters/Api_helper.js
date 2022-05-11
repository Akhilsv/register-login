import axios from 'axios';
const Api_helper = () => {
	const apiUrl = 'https://logins-systems.herokuapp.com';

	const apiCall = async (path, formData) => {
		console.log(formData);
		return axios.post(`${apiUrl}/${path}`, formData);
	};
	return { apiCall };
};

export default Api_helper;
