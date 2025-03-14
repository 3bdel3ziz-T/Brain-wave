import "./App.css";
import Benefits from "./components/Benifets";
import Collaboration from "./components/Collaberation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricings";
import RoadMap from "./components/RoadMap";
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
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
				<Pricing />
				<RoadMap />
				<Footer />
				<Routes>
					<Route path="/signIn" element={<SignIn />}></Route>
				</Routes>
			</div>
		</>
	);
};

export default App;
