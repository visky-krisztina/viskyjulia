import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../css/Error";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper>
				<div className='error-container'>
					<img src={img} className='error-img' alt='not found' />
					<h3 className='error-h3'>Ohh! page not found</h3>
					<p className='error-p'>We can't seem to find the page you're looking for</p>
					<Link to='/'>back home</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<div>
				<h3 className='error-h3'>something went wrong</h3>
			</div>
		</Wrapper>
	);
};

export default Error;
