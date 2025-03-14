import "./App.css";
import Benefits from "./components/Benifets";
import Collaboration from "./components/Collaberation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import { Outlet } from "react-router";

const App = () => {
	return (
		<>
			<div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
			</div>
		</>
	);
};

export default App;
