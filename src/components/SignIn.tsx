import { Link } from "react-router-dom";
import { service1 } from "../assets/index";
import Heading from "./Heading";

const SignIn = () => {
	return (
		// <Section className="fixed w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-0">
		// 	<div>sdkfja;ls</div>
		// </Section>
		<section className="fixed border flex flex-row justify-evenly items-center border-n-5 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 grid-web bg-n-8 w-2/3 h-2/3">
			<img src={service1} className="relative bottom-0 h-full w-fit" alt="" />

			<div className="flex flex-col justify-center items-center p-8 w-1/2">
				<Heading title="Sign In" tag="Sign In" text="Sign in to your account" />
				<form className="flex flex-col w-full gap-4">
					<input
						className="border border-n-6 focus:border-n-3 w-full h-full rounded-md p-2 "
						placeholder="Enter your name"
						type="text"
						name=""
						id=""
					/>
					<input
						className="border border-n-6 focus:border-n-3 w-full h-full rounded-md p-2 "
						placeholder="Enter your Email"
						type="email"
						name=""
						id=""
					/>
					<input
						className="border border-n-6 focus:border-n-3 w-full h-full rounded-md p-2 "
						placeholder="Enter your Password"
						type="Password"
						name=""
						id=""
					/>
				</form>
			</div>
			{/* <Link></Link> */}
		</section>
	);
};

export default SignIn;
