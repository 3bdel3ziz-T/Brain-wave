import { Link } from "react-router-dom";
import Heading from "./Heading";
import Button from "./CustomButton";
import Arrow from "../assets/svg/Arrow";
import Section from "./Section";
import Footer from "./Footer";

const SignIn = () => {
	return (
		<Section
			position="fixed"
			className=" border flex flex-col gap-12 justify-evenly items-center overflow-hidden left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-n-8 w-full h-full"
		>
			<Link
				to="/"
				className="button w-fit p-2 pr-12 ml-auto flex items-center justify-end"
			>
				Back to Home
				<Arrow />
			</Link>
			<div className="flex flex-col justify-center items-center w-2/3 md:w-96 h-full">
				<Heading
					title="Sign In"
					tag="Sign In"
					className="mb-8 flex flex-col items-center justify-center"
					text="Sign in to your account"
				/>
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
					<Button className="inline-flex text-lg mt-8">Sign In</Button>
				</form>
			</div>
			{/* <Link></Link> */}
			<Footer className="w-full" />
		</Section>
	);
};

export default SignIn;
