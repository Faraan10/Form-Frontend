import { useState } from "react";
import postApiData from "../api/postData";
import { toast } from "react-toastify";

export default function Form() {
	const [info, setInfo] = useState({
		name: "",
		email: "",
		number: "",
	});

	const { name, email, number } = info;

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await postApiData(info);
		console.log(response);
		toast.success(response.message);
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Fill in the Form
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
								Name
							</label>
							<div className="mt-2">
								<input
									name="name"
									value={name}
									onChange={handleChange}
									type="text"
									autoComplete="text"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="Email" className="block text-sm font-medium leading-6 text-gray-900">
									Email
								</label>
							</div>
							<div className="mt-2">
								<input
									name="email"
									value={email}
									onChange={handleChange}
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
								Number
							</label>
							<div className="mt-2">
								<input
									name="number"
									value={number}
									onChange={handleChange}
									type="number"
									autoComplete="number"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
