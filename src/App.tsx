import "./App.css";
import { Routes, Route as Link, Link as ToLink } from "react-router-dom";
// import { Outlet } from "react-router";

function App() {
	return (
		<>
			<h1 className="underline text-3xl ">Hi there</h1>
			<Routes>
				<Link
					path="/"
					element={<ToLink to="/dashboard">to the dashboard</ToLink>}
				>
					{/* renders into the outlet in <Root> at "/" */}
					{/* <Link index element={<h1>Home</h1>} /> */}

					<Link path="dashboard" element={<h1>Dashboard</h1>}>
						{/* renders into the outlet in <Dashboard> at "/dashboard" */}
						<Link index element={<h1>Dashboard Home</h1>} />
						{/* <Link path="settings" element={<h1>settings</h1>} /> */}
					</Link>
				</Link>
			</Routes>
		</>
	);
}

export default App;
