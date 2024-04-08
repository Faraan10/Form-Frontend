import axios from "axios";

const postData = async (data) => {
	const response = await axios({
		url: "http://localhost:1050/data/",
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default postData;
